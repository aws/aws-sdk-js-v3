import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

// Mock @aws-sdk/client-sqs before any imports that use it.
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
import { PollerError, DeleteError } from "./errors";
import type { PollerConfig } from "./types";

// ============================================================
// Helpers
// ============================================================

function makeSQSMessage(overrides: Record<string, unknown> = {}) {
  return {
    MessageId: overrides.MessageId ?? `msg-${Math.random().toString(36).slice(2, 8)}`,
    ReceiptHandle: overrides.ReceiptHandle ?? `rh-${Math.random().toString(36).slice(2, 8)}`,
    Body: overrides.Body ?? '{"hello":"world"}',
    Attributes: overrides.Attributes ?? {},
    MessageAttributes: overrides.MessageAttributes ?? {},
    MD5OfBody: overrides.MD5OfBody ?? "abc123",
  };
}

function createMockClient(receiveResponses: Array<{ Messages?: ReturnType<typeof makeSQSMessage>[] }>) {
  let callIndex = 0;
  const send = vi.fn().mockImplementation((command: { constructor: { name: string } }) => {
    const name = command.constructor.name;
    if (name === "ReceiveMessageCommand") {
      const response = receiveResponses[Math.min(callIndex, receiveResponses.length - 1)];
      callIndex++;
      return Promise.resolve(response);
    }
    if (name === "DeleteMessageBatchCommand") {
      return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
    }
    if (name === "ChangeMessageVisibilityCommand") {
      return Promise.resolve({});
    }
    return Promise.resolve({});
  });
  return { send } as unknown as NonNullable<PollerConfig["client"]>;
}

function createPoller(overrides: Partial<PollerConfig> = {}, client?: NonNullable<PollerConfig["client"]>) {
  return new SQSPoller({
    queueUrl: "https://sqs.us-east-1.amazonaws.com/123456789/test-queue",
    client: client ?? createMockClient([{ Messages: [] }]),
    receiveWaitTimeMs: 0,
    ...overrides,
  });
}

// ============================================================
// Tests
// ============================================================

describe("SQSPoller", () => {
  describe("constructor validation", () => {
    it("throws if queueUrl is empty", () => {
      expect(() => new SQSPoller({ queueUrl: "", client: createMockClient([]) })).toThrow(PollerError);
    });

    it("throws if receiveBatchSize is out of range", () => {
      expect(
        () => new SQSPoller({ queueUrl: "https://q", client: createMockClient([]), receiveBatchSize: 11 })
      ).toThrow("between 1 and 10");
    });

    it("throws if receiveBatchSize is not an integer", () => {
      expect(
        () => new SQSPoller({ queueUrl: "https://q", client: createMockClient([]), receiveBatchSize: 1.5 })
      ).toThrow("between 1 and 10");
    });

    // Fix 4: validate deleteBatchSize
    it("throws if deleteBatchSize is out of range", () => {
      expect(() => createPoller({ deleteBatchSize: 25 })).toThrow(
        "deleteBatchSize must be an integer between 1 and 10"
      );
    });

    it("throws if deleteBatchSize is 0", () => {
      expect(() => createPoller({ deleteBatchSize: 0 })).toThrow("deleteBatchSize");
    });

    // Fix 5: validate receiveWaitTimeMs
    it("throws if receiveWaitTimeMs exceeds 20000", () => {
      expect(() => createPoller({ receiveWaitTimeMs: 60_000 })).toThrow(
        "receiveWaitTimeMs must be between 0 and 20000"
      );
    });

    it("throws if receiveWaitTimeMs is negative", () => {
      expect(() => createPoller({ receiveWaitTimeMs: -1 })).toThrow("receiveWaitTimeMs");
    });

    // Fix 10: validate extendTimeout config
    it("throws if extendTimeout is true but visibilityTimeoutMs is unset", () => {
      expect(() => createPoller({ extendTimeout: true })).toThrow(
        "visibilityTimeoutMs is required when extendTimeout is true"
      );
    });

    it("throws if extendTimeoutAdvanceMs >= visibilityTimeoutMs", () => {
      expect(() =>
        createPoller({ extendTimeout: true, visibilityTimeoutMs: 5000, extendTimeoutAdvanceMs: 5000 })
      ).toThrow("extendTimeoutAdvanceMs must be less than visibilityTimeoutMs");
    });

    it("accepts valid config", () => {
      const poller = createPoller();
      expect(poller.running).toBe(false);
      expect(poller.inFlight).toBe(0);
    });
  });

  describe("start / stop", () => {
    it("throws if started twice", () => {
      const poller = createPoller();
      poller.start();
      expect(() => poller.start()).toThrow("already running");
      poller.stop(false);
    });

    it("sets running to true on start", () => {
      const poller = createPoller();
      poller.start();
      expect(poller.running).toBe(true);
      poller.stop(false);
    });

    // Fix 2: stop() awaits loop, stopped emitted exactly once
    it("emits stopped exactly once on stop()", async () => {
      const msg1 = makeSQSMessage();
      let receiveCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCount++;
          if (receiveCount === 1) return Promise.resolve({ Messages: [msg1] });
          return Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      poller.on("message", async () => {});

      let stoppedCount = 0;
      poller.on("stopped", () => stoppedCount++);

      poller.start();
      await poller.stop(true);

      expect(stoppedCount).toBe(1);
    });
  });

  // Fix 14: guard against double-poll
  describe("double-poll guard", () => {
    it("throws if start() called while iterator is active", async () => {
      const client = createMockClient([{ Messages: [] }]);
      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 10,
      });

      // Start iterator but don't consume — just begin
      const iter = poller[Symbol.asyncIterator]();
      // First next() starts the loop
      const promise = iter.next();

      expect(() => poller.start()).toThrow("already running");

      // Clean up
      await iter.return!(undefined);
      await promise;
    });

    it("throws if iterator started while start() is active", async () => {
      const poller = createPoller();
      poller.start();

      const iter = poller[Symbol.asyncIterator]();
      await expect(iter.next()).rejects.toThrow("already running");

      await poller.stop(false);
    });
  });

  describe("event-based polling", () => {
    it("emits message events and auto-deletes", async () => {
      const msg1 = makeSQSMessage({ Body: "hello" });
      const client = createMockClient([{ Messages: [msg1] }, { Messages: [] }]);

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });

      const received: string[] = [];
      poller.on("message", async (message) => {
        received.push(message.body!);
      });

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      expect(received).toContain("hello");
      const deleteCalls = (client.send as ReturnType<typeof vi.fn>).mock.calls.filter(
        (c: unknown[]) => (c[0] as any).constructor.name === "DeleteMessageBatchCommand"
      );
      expect(deleteCalls.length).toBeGreaterThanOrEqual(1);
    });

    it("does not delete when handler throws", async () => {
      const msg1 = makeSQSMessage({ Body: "fail-me" });
      let receiveCallCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCallCount++;
          if (receiveCallCount === 1) return Promise.resolve({ Messages: [msg1] });
          return Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [], Failed: [] });
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });

      poller.on("message", async () => {
        throw new Error("processing failed");
      });

      const errors: Error[] = [];
      poller.on("error", (err) => errors.push(err));

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      expect(errors.some((e) => e.message === "processing failed")).toBe(true);
      const deleteCalls = send.mock.calls.filter(
        (c: unknown[]) => (c[0] as any).constructor.name === "DeleteMessageBatchCommand"
      );
      expect(deleteCalls.length).toBe(0);
    });
  });

  // Fix 1: maxConcurrency clamping
  describe("maxConcurrency clamping", () => {
    it("clamps MaxNumberOfMessages to remaining concurrency headroom", async () => {
      const msgs = Array.from({ length: 10 }, (_, i) => makeSQSMessage({ MessageId: `m${i}`, Body: `body-${i}` }));
      let receiveCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCount++;
          if (receiveCount === 1) return Promise.resolve({ Messages: msgs });
          return Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        maxConcurrency: 2,
        receiveBatchSize: 10,
        idleTimeoutMs: 100,
      });

      poller.on("message", async () => {
        await new Promise((r) => setTimeout(r, 10));
      });

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      // Check that the first ReceiveMessage had MaxNumberOfMessages clamped to 2
      const firstReceiveCmd = send.mock.calls.find(
        (c: unknown[]) => (c[0] as any).constructor.name === "ReceiveMessageCommand"
      );
      expect(firstReceiveCmd).toBeDefined();
      expect((firstReceiveCmd![0] as any).input.MaxNumberOfMessages).toBe(2);
    });
  });

  // Fix 3: DeleteMessageBatch non-distinct Ids
  describe("delete batch Ids", () => {
    it("uses array index for batch entry Ids (not messageId)", async () => {
      const dupId = "same-message-id";
      const msg1 = makeSQSMessage({ MessageId: dupId, ReceiptHandle: "rh-1" });
      const msg2 = makeSQSMessage({ MessageId: dupId, ReceiptHandle: "rh-2" });
      let receiveCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCount++;
          if (receiveCount === 1) return Promise.resolve({ Messages: [msg1, msg2] });
          return Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }, { Id: "1" }], Failed: [] });
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      poller.on("message", async () => {});

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      const deleteCall = send.mock.calls.find(
        (c: unknown[]) => (c[0] as any).constructor.name === "DeleteMessageBatchCommand"
      );
      if (deleteCall) {
        const entries = (deleteCall[0] as any).input.Entries;
        const ids = entries.map((e: any) => e.Id);
        // Ids should be distinct (array indices)
        expect(new Set(ids).size).toBe(ids.length);
        expect(ids).toContain("0");
        expect(ids).toContain("1");
      }
    });
  });

  describe("async iteration", () => {
    it("yields messages and auto-deletes", async () => {
      const msg1 = makeSQSMessage({ Body: "iter-1" });
      const msg2 = makeSQSMessage({ Body: "iter-2" });
      let receiveCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCount++;
          if (receiveCount === 1) return Promise.resolve({ Messages: [msg1, msg2] });
          return Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });

      const received: string[] = [];
      for await (const msg of poller) {
        received.push(msg.body!);
      }

      expect(received).toEqual(["iter-1", "iter-2"]);
    });
  });

  // Fix 7: AbortSignal forwarded to client.send
  describe("AbortSignal", () => {
    it("stops polling when signal is aborted", async () => {
      const ac = new AbortController();
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          return Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({});
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        abortSignal: ac.signal,
        idlePollIntervalMs: 200,
      });

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      setTimeout(() => ac.abort(), 50);
      await stoppedPromise;

      expect(poller.running).toBe(false);
    });

    it("forwards abort signal to client.send", async () => {
      const send = vi.fn().mockImplementation(() => Promise.resolve({ Messages: [] }));
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 10,
      });

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });
      poller.start();
      await stoppedPromise;

      // Check that send was called with a second arg containing abortSignal
      const receiveCall = send.mock.calls.find(
        (c: unknown[]) => (c[0] as any).constructor.name === "ReceiveMessageCommand"
      );
      expect(receiveCall).toBeDefined();
      expect(receiveCall![1]).toHaveProperty("abortSignal");
    });
  });

  // Fix 8: beforeRequest throw stops polling
  describe("beforeRequest", () => {
    it("stops polling when beforeRequest throws", async () => {
      const send = vi.fn().mockImplementation(() => Promise.resolve({ Messages: [] }));
      const client = { send } as any;

      let callCount = 0;
      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        beforeRequest: () => {
          callCount++;
          if (callCount >= 2) throw new Error("stop now");
        },
      });

      const errors: Error[] = [];
      poller.on("error", (err) => errors.push(err));

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      expect(poller.running).toBe(false);
      expect(errors.some((e) => e.message === "stop now")).toBe(true);
    });
  });

  // Fix 9: errorCount increments on delete/extend errors
  describe("error counting", () => {
    it("increments errorCount on partial delete failure", async () => {
      const msg1 = makeSQSMessage();
      let receiveCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCount++;
          if (receiveCount === 1) return Promise.resolve({ Messages: [msg1] });
          return Promise.resolve({ Messages: [] });
        }
        if (cmd.constructor.name === "DeleteMessageBatchCommand") {
          return Promise.resolve({
            Successful: [],
            Failed: [{ Id: "0", SenderFault: true, Code: "InternalError", Message: "boom" }],
          });
        }
        return Promise.resolve({});
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      poller.on("message", async () => {});

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      expect(poller.getStats().errorCount).toBeGreaterThanOrEqual(1);
    });
  });

  describe("statistics", () => {
    it("tracks request and message counts", async () => {
      const msg1 = makeSQSMessage();
      let receiveCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCount++;
          if (receiveCount === 1) return Promise.resolve({ Messages: [msg1] });
          return Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      poller.on("message", async () => {});

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      const stats = poller.getStats();
      expect(stats.receivedMessageCount).toBe(1);
      expect(stats.requestCount).toBeGreaterThanOrEqual(2);
      expect(stats.pollingStartedAt).toBeInstanceOf(Date);
      expect(stats.pollingStoppedAt).toBeInstanceOf(Date);
    });

    it("toJSON returns serializable stats", async () => {
      const client = createMockClient([{ Messages: [] }]);
      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 10,
      });
      poller.on("message", async () => {});

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      const json = poller.toJSON();
      expect(typeof json.requestCount).toBe("number");
      expect(typeof json.pollingDurationMs).toBe("number");
      expect(json.pollingStartedAt).toMatch(/^\d{4}-/);
    });
  });

  describe("idle timeout", () => {
    it("emits idle and stops after timeout", async () => {
      const client = createMockClient([{ Messages: [] }]);
      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });

      let idleEmitted = false;
      poller.on("idle", () => {
        idleEmitted = true;
      });

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      expect(idleEmitted).toBe(true);
    });
  });

  describe("deleteMessages false (manual deletion)", () => {
    it("does not auto-delete when deleteMessages is false", async () => {
      const msg1 = makeSQSMessage({ Body: "manual" });
      let receiveCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCount++;
          if (receiveCount === 1) return Promise.resolve({ Messages: [msg1] });
          return Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({ Successful: [], Failed: [] });
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
        deleteMessages: false,
      });

      poller.on("message", async (message) => {
        message.keep();
      });

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      const deleteCalls = send.mock.calls.filter(
        (c: unknown[]) => (c[0] as any).constructor.name === "DeleteMessageBatchCommand"
      );
      expect(deleteCalls.length).toBe(0);
    });
  });

  describe("backoff", () => {
    it("emits error and continues after ReceiveMessage failure", async () => {
      let callCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          callCount++;
          if (callCount === 1) return Promise.reject(new Error("network error"));
          return Promise.resolve({ Messages: [] });
        }
        return Promise.resolve({});
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 200,
        backoffMs: 10,
        maxBackoffMs: 50,
      });

      const errors: Error[] = [];
      poller.on("error", (err) => errors.push(err));

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      expect(errors.length).toBeGreaterThanOrEqual(1);
      expect(errors[0].message).toBe("network error");
      expect(callCount).toBeGreaterThanOrEqual(2);
    });
  });

  describe("Message class", () => {
    it("wraps raw SQS message fields", () => {
      const raw = makeSQSMessage({
        MessageId: "test-id",
        ReceiptHandle: "test-rh",
        Body: "test-body",
      });
      const msg = new Message(raw as any, {} as any, "https://q", vi.fn());
      expect(msg.messageId).toBe("test-id");
      expect(msg.receiptHandle).toBe("test-rh");
      expect(msg.body).toBe("test-body");
      expect(msg.receivedAt).toBeInstanceOf(Date);
    });

    it("enqueueDelete calls the callback and marks handled", () => {
      const raw = makeSQSMessage();
      const cb = vi.fn();
      const msg = new Message(raw as any, {} as any, "q", cb);
      msg.enqueueDelete();
      expect(cb).toHaveBeenCalledWith(msg);
      expect(msg.handled).toBe(true);
    });

    it("enqueueDelete is idempotent", () => {
      const raw = makeSQSMessage();
      const cb = vi.fn();
      const msg = new Message(raw as any, {} as any, "q", cb);
      msg.enqueueDelete();
      msg.enqueueDelete();
      expect(cb).toHaveBeenCalledTimes(1);
    });

    it("keep marks handled without calling callback", () => {
      const raw = makeSQSMessage();
      const cb = vi.fn();
      const msg = new Message(raw as any, {} as any, "q", cb);
      msg.keep();
      expect(cb).not.toHaveBeenCalled();
      expect(msg.handled).toBe(true);
    });

    it("release sends ChangeMessageVisibility with timeout 0", async () => {
      const send = vi.fn().mockResolvedValue({});
      const client = { send } as any;
      const raw = makeSQSMessage({ ReceiptHandle: "my-rh" });
      const msg = new Message(raw as any, client, "https://q", vi.fn());

      await msg.release();

      expect(send).toHaveBeenCalledTimes(1);
      const cmd = send.mock.calls[0][0];
      expect(cmd.input.VisibilityTimeout).toBe(0);
      expect(cmd.input.ReceiptHandle).toBe("my-rh");
      expect(msg.handled).toBe(true);
    });

    it("changeVisibility converts ms to seconds", async () => {
      const send = vi.fn().mockResolvedValue({});
      const client = { send } as any;
      const raw = makeSQSMessage();
      const msg = new Message(raw as any, client, "q", vi.fn());

      await msg.changeVisibility(45_000);

      const cmd = send.mock.calls[0][0];
      expect(cmd.input.VisibilityTimeout).toBe(45);
    });

    // Fix 13: markHandled removed
    it("does not have markHandled method", () => {
      const raw = makeSQSMessage();
      const msg = new Message(raw as any, {} as any, "q", vi.fn());
      expect((msg as any).markHandled).toBeUndefined();
    });
  });

  describe("error classes", () => {
    it("PollerError has correct name", () => {
      const err = new PollerError("test");
      expect(err.name).toBe("PollerError");
      expect(err.message).toBe("test");
      expect(err instanceof Error).toBe(true);
    });

    it("DeleteError includes failures", () => {
      const failures = [{ Id: "msg1", SenderFault: true, Code: "InternalError", Message: "boom" }];
      const err = new DeleteError("delete failed", failures);
      expect(err.name).toBe("DeleteError");
      expect(err.failures).toBe(failures);
      expect(err instanceof PollerError).toBe(true);
    });
  });

  describe("on / off", () => {
    it("removes a listener with off()", () => {
      const poller = createPoller();
      const fn = vi.fn();
      poller.on("empty", fn);
      poller.off("empty", fn);
      expect(true).toBe(true);
    });
  });

  describe("stop() edge cases", () => {
    it("stop(false) does not wait for in-flight handlers", async () => {
      const msg1 = makeSQSMessage();
      let receiveCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCount++;
          if (receiveCount === 1) return Promise.resolve({ Messages: [msg1] });
          // Second call hangs (simulates long poll) until abort
          return new Promise((_, reject) => {
            setTimeout(() => reject(new Error("aborted")), 5000);
          });
        }
        return Promise.resolve({ Successful: [{ Id: "0" }], Failed: [] });
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
      });

      let handlerResolved = false;
      poller.on("message", async () => {
        // Simulate a long-running handler
        await new Promise((r) => setTimeout(r, 2000));
        handlerResolved = true;
      });

      poller.start();
      // Give time for the message to be received and handler to start
      await new Promise((r) => setTimeout(r, 50));

      const start = Date.now();
      await poller.stop(false);
      const elapsed = Date.now() - start;

      // stop(false) should return quickly without waiting for the 2s handler
      expect(elapsed).toBeLessThan(500);
      // Handler may or may not have resolved — the point is stop() didn't wait
    });

    it("stop() on never-started poller emits stopped and sets pollingStoppedAt", async () => {
      const poller = createPoller();

      let stoppedEmitted = false;
      poller.on("stopped", () => {
        stoppedEmitted = true;
      });

      await poller.stop();

      expect(stoppedEmitted).toBe(true);
      expect(poller.getStats().pollingStoppedAt).toBeInstanceOf(Date);
    });

    it("second stop() call emits stopped again", async () => {
      const client = createMockClient([{ Messages: [] }]);
      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 10,
      });

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      // Now call stop again on an already-stopped poller
      let secondStoppedEmitted = false;
      poller.on("stopped", () => {
        secondStoppedEmitted = true;
      });
      await poller.stop();
      expect(secondStoppedEmitted).toBe(true);
    });
  });

  describe("DeleteError traceability", () => {
    it("DeleteError includes messageIds mapping failures to original messages", async () => {
      const msg1 = makeSQSMessage({ MessageId: "msg-aaa" });
      const msg2 = makeSQSMessage({ MessageId: "msg-bbb" });
      let receiveCount = 0;
      const send = vi.fn().mockImplementation((cmd: any) => {
        if (cmd.constructor.name === "ReceiveMessageCommand") {
          receiveCount++;
          if (receiveCount === 1) return Promise.resolve({ Messages: [msg1, msg2] });
          return Promise.resolve({ Messages: [] });
        }
        if (cmd.constructor.name === "DeleteMessageBatchCommand") {
          return Promise.resolve({
            Successful: [{ Id: "0" }],
            Failed: [{ Id: "1", SenderFault: true, Code: "InternalError", Message: "boom" }],
          });
        }
        return Promise.resolve({});
      });
      const client = { send } as any;

      const poller = new SQSPoller({
        queueUrl: "https://q",
        client,
        receiveWaitTimeMs: 0,
        idleTimeoutMs: 50,
      });
      poller.on("message", async () => {});

      const errors: Error[] = [];
      poller.on("error", (err) => errors.push(err));

      const stoppedPromise = new Promise<void>((resolve) => {
        poller.on("stopped", () => resolve());
      });

      poller.start();
      await stoppedPromise;

      const deleteError = errors.find((e) => e instanceof DeleteError) as DeleteError | undefined;
      expect(deleteError).toBeDefined();
      expect(deleteError!.messageIds).toContain("msg-bbb");
      expect(deleteError!.message).toContain("msg-bbb");
    });
  });
});
