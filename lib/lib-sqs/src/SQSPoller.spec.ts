import { describe, it, expect, vi } from "vitest";

vi.mock("@aws-sdk/client-sqs", () => {
  class MockCommand {
    public readonly input: Record<string, unknown>;
    constructor(input: Record<string, unknown>) {
      this.input = input;
    }
  }
  return {
    SQSClient: class {
      send = vi.fn();
    },
    ReceiveMessageCommand: class extends MockCommand {
      static name = "ReceiveMessageCommand";
    },
    DeleteMessageBatchCommand: class extends MockCommand {
      static name = "DeleteMessageBatchCommand";
    },
    ChangeMessageVisibilityCommand: class extends MockCommand {
      static name = "ChangeMessageVisibilityCommand";
    },
  };
});

import { SQSPoller } from "./SQSPoller";
import { Message } from "./Message";
import type { MessageCallbacks } from "./Message";
import { PollerError, DeleteError } from "./errors";
import type { PollerConfig } from "./types";

function makeSQSMessage(ov: Record<string, unknown> = {}) {
  return {
    MessageId: ov.MessageId ?? `msg-${Math.random().toString(36).slice(2, 8)}`,
    ReceiptHandle: ov.ReceiptHandle ?? `rh-${Math.random().toString(36).slice(2, 8)}`,
    Body: ov.Body ?? "hello",
    Attributes: {},
    MessageAttributes: {},
    MD5OfBody: "abc",
  };
}

function mockClient(responses: Array<{ Messages?: ReturnType<typeof makeSQSMessage>[] }>) {
  let idx = 0;
  return {
    send: vi.fn().mockImplementation((cmd: any) => {
      if (cmd.constructor.name === "ReceiveMessageCommand") {
        return Promise.resolve(responses[Math.min(idx++, responses.length - 1)]);
      }
      if (cmd.constructor.name === "DeleteMessageBatchCommand")
        return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
      return Promise.resolve({});
    }),
  } as unknown as NonNullable<PollerConfig["client"]>;
}

function poller(ov: Partial<PollerConfig> = {}) {
  return new SQSPoller({ queueUrl: "https://q", client: mockClient([{ Messages: [] }]), receiveWaitTimeMs: 0, ...ov });
}

function cbs(ov: Partial<MessageCallbacks> = {}): MessageCallbacks {
  return {
    enqueueDelete: ov.enqueueDelete ?? vi.fn(),
    release: ov.release ?? vi.fn().mockResolvedValue(undefined),
    changeVisibility: ov.changeVisibility ?? vi.fn().mockResolvedValue(undefined),
  };
}

const stopped = (p: SQSPoller) =>
  new Promise<void>((r) => {
    p.on("stopped", () => r());
  });

describe("SQSPoller", () => {
  describe("constructor", () => {
    it("rejects empty queueUrl", () => {
      expect(() => new SQSPoller({ queueUrl: "", client: mockClient([]) })).toThrow(PollerError);
    });
    it("rejects receiveBatchSize > 10", () => {
      expect(() => poller({ receiveBatchSize: 11 })).toThrow("between 1 and 10");
    });
    it("rejects deleteBatchSize > 10", () => {
      expect(() => poller({ deleteBatchSize: 25 })).toThrow("deleteBatchSize");
    });
    it("rejects receiveWaitTimeMs > 20000", () => {
      expect(() => poller({ receiveWaitTimeMs: 60_000 })).toThrow("receiveWaitTimeMs");
    });
    it("rejects maxConcurrency 0", () => {
      expect(() => poller({ maxConcurrency: 0 })).toThrow("maxConcurrency");
    });
    it("rejects extendTimeout without visibilityTimeoutMs", () => {
      expect(() => poller({ extendTimeout: true })).toThrow("visibilityTimeoutMs");
    });
    it("rejects extendTimeoutAdvanceMs >= visibilityTimeoutMs", () => {
      expect(() => poller({ extendTimeout: true, visibilityTimeoutMs: 5000, extendTimeoutAdvanceMs: 5000 })).toThrow(
        "extendTimeoutAdvanceMs"
      );
    });
    it("accepts valid config", () => {
      expect(poller().running).toBe(false);
    });
  });

  describe("start / stop", () => {
    it("throws on double start", () => {
      const p = poller();
      p.start();
      expect(() => p.start()).toThrow("already running");
      p.stop(false);
    });

    it("emits stopped exactly once", async () => {
      const msg = makeSQSMessage();
      let rc = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          rc++;
          return rc === 1 ? Promise.resolve({ Messages: [msg] }) : Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      p.on("message", async () => {});
      let count = 0;
      p.on("stopped", () => count++);
      p.start();
      await p.stop(true);
      expect(count).toBe(1);
    });

    it("stop on never-started emits stopped", async () => {
      const p = poller();
      let emitted = false;
      p.on("stopped", () => {
        emitted = true;
      });
      await p.stop();
      expect(emitted).toBe(true);
      expect(p.getStats().pollingStoppedAt).toBeInstanceOf(Date);
    });
  });

  describe("on / off", () => {
    it("on() returns unsubscribe function", () => {
      const p = poller();
      const u = p.on("empty", vi.fn());
      expect(typeof u).toBe("function");
      u();
    });
    it("off(event) clears all listeners", () => {
      const p = poller();
      p.on("empty", vi.fn());
      p.on("empty", vi.fn());
      p.off("empty");
    });
  });

  describe("double-poll guard", () => {
    it("throws start() while iterating", async () => {
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: mockClient([{ Messages: [] }]),
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 10,
      });
      const iter = p[Symbol.asyncIterator]();
      const pr = iter.next();
      expect(() => p.start()).toThrow("already running");
      await iter.return!(undefined);
      await pr;
    });
    it("throws iterator while started", async () => {
      const p = poller();
      p.start();
      await expect(p[Symbol.asyncIterator]().next()).rejects.toThrow("open iterator");
      await p.stop(false);
    });
  });

  describe("event-based polling", () => {
    it("emits message and auto-deletes", async () => {
      const msg = makeSQSMessage({ Body: "hi" });
      const c = mockClient([{ Messages: [msg] }, { Messages: [] }]);
      const p = new SQSPoller({ queueUrl: "https://q", client: c, receiveWaitTimeMs: 0, idleTimeoutMs: 50 });
      const got: string[] = [];
      p.on("message", async (m) => {
        got.push(m.body!);
      });
      const done = stopped(p);
      p.start();
      await done;
      expect(got).toContain("hi");
      expect((c.send as any).mock.calls.some((c: any) => c[0].constructor.name === "DeleteMessageBatchCommand")).toBe(
        true
      );
    });

    it("skips delete when handler throws", async () => {
      const msg = makeSQSMessage();
      let rc = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          rc++;
          return rc === 1 ? Promise.resolve({ Messages: [msg] }) : Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [], Failed: [] });
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      p.on("message", async () => {
        throw new Error("fail");
      });
      p.on("error", () => {});
      const done = stopped(p);
      p.start();
      await done;
      expect(send.mock.calls.filter((c: any) => c[0].constructor.name === "DeleteMessageBatchCommand").length).toBe(0);
    });

    it("skips delete when no message listeners", async () => {
      const msg = makeSQSMessage();
      let rc = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          rc++;
          return rc === 1 ? Promise.resolve({ Messages: [msg] }) : Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [], Failed: [] });
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      const done = stopped(p);
      p.start();
      await done;
      expect(send.mock.calls.filter((c: any) => c[0].constructor.name === "DeleteMessageBatchCommand").length).toBe(0);
    });
  });

  describe("concurrency clamping", () => {
    it("clamps MaxNumberOfMessages", async () => {
      const msgs = Array.from({ length: 10 }, (_, i) => makeSQSMessage({ MessageId: `m${i}` }));
      let rc = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          rc++;
          return rc === 1 ? Promise.resolve({ Messages: msgs }) : Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        maxConcurrency: 2,
        receiveBatchSize: 10,
        idleTimeoutMs: 100,
      });
      p.on("message", async () => {
        await new Promise((r) => setTimeout(r, 10));
      });
      const done = stopped(p);
      p.start();
      await done;
      const first = send.mock.calls.find((c: any) => c[0].constructor.name === "ReceiveMessageCommand");
      expect(first![0].input.MaxNumberOfMessages).toBe(2);
    });
  });

  describe("delete batch Ids", () => {
    it("uses array index for Ids", async () => {
      const m1 = makeSQSMessage({ MessageId: "dup", ReceiptHandle: "rh1" });
      const m2 = makeSQSMessage({ MessageId: "dup", ReceiptHandle: "rh2" });
      let rc = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          rc++;
          return rc === 1 ? Promise.resolve({ Messages: [m1, m2] }) : Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }, { Id: "1" }], Failed: [] });
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      p.on("message", async () => {});
      const done = stopped(p);
      p.start();
      await done;
      const dc = send.mock.calls.find((c: any) => c[0].constructor.name === "DeleteMessageBatchCommand");
      if (dc) {
        const ids = dc[0].input.Entries.map((e: any) => e.Id);
        expect(new Set(ids).size).toBe(ids.length);
      }
    });
  });

  describe("async iteration", () => {
    it("yields messages", async () => {
      const m1 = makeSQSMessage({ Body: "a" });
      const m2 = makeSQSMessage({ Body: "b" });
      let rc = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          rc++;
          return rc === 1 ? Promise.resolve({ Messages: [m1, m2] }) : Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      const got: string[] = [];
      for await (const m of p) got.push(m.body!);
      expect(got).toEqual(["a", "b"]);
    });
  });

  describe("AbortSignal", () => {
    it("stops on abort", async () => {
      const ac = new AbortController();
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send: vi.fn().mockResolvedValue({ Messages: [] }) } as any,
        receiveWaitTimeMs: 0,
        abortSignal: ac.signal,
        idlePollIntervalMs: 200,
      });
      const done = stopped(p);
      p.start();
      setTimeout(() => ac.abort(), 50);
      await done;
      expect(p.running).toBe(false);
    });
    it("forwards signal to send", async () => {
      const send = vi.fn().mockResolvedValue({ Messages: [] });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 10,
      });
      const done = stopped(p);
      p.start();
      await done;
      const rc = send.mock.calls.find((c: any) => c[0].constructor.name === "ReceiveMessageCommand");
      expect(rc![1]).toHaveProperty("abortSignal");
    });
  });

  describe("beforeRequest", () => {
    it("stops on throw", async () => {
      let n = 0;
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send: vi.fn().mockResolvedValue({ Messages: [] }) } as any,
        receiveWaitTimeMs: 0,
        beforeRequest: () => {
          n++;
          if (n >= 2) throw new Error("stop");
        },
      });
      const errs: Error[] = [];
      p.on("error", (e) => errs.push(e));
      const done = stopped(p);
      p.start();
      await done;
      expect(errs.some((e) => e.message === "stop")).toBe(true);
    });
  });

  describe("errorCount", () => {
    it("counts partial delete failures", async () => {
      const msg = makeSQSMessage();
      let rc = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          rc++;
          return rc === 1 ? Promise.resolve({ Messages: [msg] }) : Promise.resolve({ Messages: [] });
        }
        if (c.constructor.name === "DeleteMessageBatchCommand")
          return Promise.resolve({ Successful: [], Failed: [{ Id: "0", Code: "X", Message: "boom" }] });
        return Promise.resolve({});
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      p.on("message", async () => {});
      const done = stopped(p);
      p.start();
      await done;
      expect(p.getStats().errorCount).toBeGreaterThanOrEqual(1);
    });
  });

  describe("DeleteError traceability", () => {
    it("includes messageIds", async () => {
      const m1 = makeSQSMessage({ MessageId: "aaa" });
      const m2 = makeSQSMessage({ MessageId: "bbb" });
      let rc = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          rc++;
          return rc === 1 ? Promise.resolve({ Messages: [m1, m2] }) : Promise.resolve({ Messages: [] });
        }
        if (c.constructor.name === "DeleteMessageBatchCommand")
          return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [{ Id: "1", Code: "X", Message: "boom" }] });
        return Promise.resolve({});
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      p.on("message", async () => {});
      const errs: Error[] = [];
      p.on("error", (e) => errs.push(e));
      const done = stopped(p);
      p.start();
      await done;
      const de = errs.find((e) => e instanceof DeleteError) as DeleteError;
      expect(de?.messageIds).toContain("bbb");
    });
  });

  describe("stats", () => {
    it("toJSON serializes", async () => {
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: mockClient([{ Messages: [] }]),
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 10,
      });
      const done = stopped(p);
      p.start();
      await done;
      expect(p.toJSON().pollingStartedAt).toMatch(/^\d{4}-/);
    });
    it("toString returns summary", () => {
      expect(poller().toString()).toContain("SQSPoller(stopped");
    });
  });

  describe("idle timeout", () => {
    it("emits idle", async () => {
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: mockClient([{ Messages: [] }]),
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      let idle = false;
      p.on("idle", () => {
        idle = true;
      });
      const done = stopped(p);
      p.start();
      await done;
      expect(idle).toBe(true);
    });
  });

  describe("backoff", () => {
    it("recovers after error", async () => {
      let n = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          n++;
          return n === 1 ? Promise.reject(new Error("net")) : Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({});
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 200,
        backoffMs: 10,
        maxBackoffMs: 50,
      });
      const errs: Error[] = [];
      p.on("error", (e) => errs.push(e));
      const done = stopped(p);
      p.start();
      await done;
      expect(errs[0].message).toBe("net");
      expect(n).toBeGreaterThanOrEqual(2);
    });
  });

  describe("Message", () => {
    it("wraps fields", () => {
      const m = new Message(makeSQSMessage({ MessageId: "id", Body: "b" }) as any, cbs());
      expect(m.messageId).toBe("id");
      expect(m.body).toBe("b");
    });
    it("enqueueDelete calls callback", () => {
      const cb = vi.fn();
      const m = new Message(makeSQSMessage() as any, cbs({ enqueueDelete: cb }));
      m.enqueueDelete();
      expect(cb).toHaveBeenCalledWith(m);
      expect(m.handled).toBe(true);
    });
    it("enqueueDelete idempotent", () => {
      const cb = vi.fn();
      const m = new Message(makeSQSMessage() as any, cbs({ enqueueDelete: cb }));
      m.enqueueDelete();
      m.enqueueDelete();
      expect(cb).toHaveBeenCalledTimes(1);
    });
    it("keep marks handled", () => {
      const cb = vi.fn();
      const m = new Message(makeSQSMessage() as any, cbs({ enqueueDelete: cb }));
      m.keep();
      expect(cb).not.toHaveBeenCalled();
      expect(m.handled).toBe(true);
    });
    it("release calls callback", async () => {
      const fn = vi.fn().mockResolvedValue(undefined);
      const m = new Message(makeSQSMessage({ ReceiptHandle: "rh" }) as any, cbs({ release: fn }));
      await m.release();
      expect(fn).toHaveBeenCalledWith("rh");
      expect(m.handled).toBe(true);
    });
    it("changeVisibility calls callback", async () => {
      const fn = vi.fn().mockResolvedValue(undefined);
      const m = new Message(makeSQSMessage({ ReceiptHandle: "rh" }) as any, cbs({ changeVisibility: fn }));
      await m.changeVisibility(45_000);
      expect(fn).toHaveBeenCalledWith("rh", 45_000);
    });
  });

  describe("errors", () => {
    it("PollerError", () => {
      const e = new PollerError("x");
      expect(e.name).toBe("PollerError");
      expect(e instanceof Error).toBe(true);
    });
    it("DeleteError", () => {
      const e = new DeleteError("x", [{ Id: "0", SenderFault: true, Code: "X", Message: "y" }], ["m1"]);
      expect(e.name).toBe("DeleteError");
      expect(e.messageIds).toEqual(["m1"]);
      expect(e instanceof PollerError).toBe(true);
    });
  });

  describe("stop(false) with slow backoff", () => {
    it("returns quickly even during backoff", async () => {
      let callCount = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          callCount++;
          return Promise.reject(new Error("always fail"));
        }
        return Promise.resolve({});
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        backoffMs: 5_000,
        maxBackoffMs: 10_000,
      });
      p.on("error", () => {});
      p.start();
      await new Promise((r) => setTimeout(r, 100));
      expect(callCount).toBeGreaterThanOrEqual(1);
      const start = Date.now();
      await p.stop(false);
      const elapsed = Date.now() - start;
      expect(elapsed).toBeLessThan(500);
    });
  });

  describe("additional validation coverage", () => {
    it("rejects non-integer receiveBatchSize", () => {
      expect(() => poller({ receiveBatchSize: 1.5 })).toThrow("between 1 and 10");
    });
    it("rejects deleteBatchSize of 0", () => {
      expect(() => poller({ deleteBatchSize: 0 })).toThrow("deleteBatchSize");
    });
    it("deleteMessages:false with keep()", async () => {
      const msg = makeSQSMessage();
      let rc = 0;
      const send = vi.fn().mockImplementation((c: any) => {
        if (c.constructor.name === "ReceiveMessageCommand") {
          rc++;
          return rc === 1 ? Promise.resolve({ Messages: [msg] }) : Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [], Failed: [] });
      });
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: { send } as any,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
        deleteMessages: false,
      });
      p.on("message", async (m) => {
        m.keep();
      });
      const done = stopped(p);
      p.start();
      await done;
      expect(send.mock.calls.filter((c: any) => c[0].constructor.name === "DeleteMessageBatchCommand").length).toBe(0);
    });
  });

  describe("async iteration lifecycle", () => {
    const sent = (c: any, name: string) =>
      (c.send as any).mock.calls.filter((x: any) => x[0].constructor.name === name).length;

    it("stop() while paused at yield ends the iterator and its heartbeats", async () => {
      const c = mockClient([{ Messages: [makeSQSMessage(), makeSQSMessage()] }]);
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: c,
        receiveWaitTimeMs: 0,
        visibilityTimeoutMs: 60,
        extendTimeout: true,
        extendTimeoutAdvanceMs: 40,
      });
      let stopped = 0;
      p.on("stopped", () => stopped++);
      const iter = p[Symbol.asyncIterator]();
      await iter.next();
      await p.stop();
      const extensions = sent(c, "ChangeMessageVisibilityCommand");
      await new Promise((r) => setTimeout(r, 120));
      expect(sent(c, "ChangeMessageVisibilityCommand")).toBe(extensions);
      expect((await iter.next()).done).toBe(true);
      expect(stopped).toBe(1);
      expect(p.running).toBe(false);
    });

    it("break does not auto-delete the current message", async () => {
      const c = mockClient([{ Messages: [makeSQSMessage()] }]);
      const p = poller({ client: c, deleteWaitMs: 5 });
      for await (const _ of p) break;
      expect(sent(c, "DeleteMessageBatchCommand")).toBe(0);
    });

    it("enqueueDelete() before break deletes the message", async () => {
      const c = mockClient([{ Messages: [makeSQSMessage()] }]);
      const p = poller({ client: c, deleteWaitMs: 5 });
      for await (const m of p) {
        m.enqueueDelete();
        break;
      }
      expect(sent(c, "DeleteMessageBatchCommand")).toBe(1);
    });
  });

  describe("idle timeout across restarts", () => {
    it("does not reuse the previous run's last message time", async () => {
      const c = mockClient([{ Messages: [makeSQSMessage()] }, { Messages: [] }]);
      const p = new SQSPoller({
        queueUrl: "https://q",
        client: c,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 150,
        idlePollIntervalMs: 10,
        deleteWaitMs: 5,
      });
      p.on("message", async () => {});
      p.start();
      await new Promise((r) => setTimeout(r, 40));
      await p.stop();
      await new Promise((r) => setTimeout(r, 200));
      const t0 = Date.now();
      await new Promise<void>((r) => {
        p.on("idle", () => r());
        p.start();
      });
      expect(Date.now() - t0).toBeGreaterThanOrEqual(140);
      await p.stop();
    });
  });
});
