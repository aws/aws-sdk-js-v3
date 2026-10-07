import { SQS } from "@aws-sdk/client-sqs";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

import { SQSPoller } from "./SQSPoller";
import type { PollerConfig } from "./types";

describe(
  SQSPoller.name,
  () => {
    let sqs: SQS;
    const createdQueues: string[] = [];

    beforeAll(() => {
      sqs = new SQS({ region: "us-west-2", credentials: aws?.testCredentials });
    });

    afterAll(async () => {
      for (const QueueUrl of createdQueues) {
        await sqs.deleteQueue({ QueueUrl }).catch((e) => console.warn(`Failed to delete queue ${QueueUrl}:`, e));
      }
    });

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    async function createQueue(visibilityTimeoutSeconds = 30): Promise<string> {
      const { QueueUrl } = await sqs.createQueue({
        QueueName: `aws-js-sdk-lib-sqs-${crypto.randomUUID()}`,
        Attributes: { VisibilityTimeout: String(visibilityTimeoutSeconds) },
      });
      createdQueues.push(QueueUrl!);
      return QueueUrl!;
    }

    async function sendMessages(queueUrl: string, bodies: string[]): Promise<void> {
      const { Failed } = await sqs.sendMessageBatch({
        QueueUrl: queueUrl,
        Entries: bodies.map((MessageBody, i) => ({ Id: String(i), MessageBody })),
      });
      expect(Failed ?? []).toEqual([]);
    }

    // Waits out the visibility timeout, then confirms nothing is left to receive.
    async function expectQueueEmpty(queueUrl: string, visibilityTimeoutSeconds: number): Promise<void> {
      await sleep((visibilityTimeoutSeconds + 1) * 1000);
      const { Messages } = await sqs.receiveMessage({ QueueUrl: queueUrl, WaitTimeSeconds: 2 });
      expect(Messages ?? []).toEqual([]);
    }

    function createPoller(queueUrl: string, config: Partial<PollerConfig> = {}): SQSPoller {
      return new SQSPoller({
        queueUrl,
        client: sqs,
        receiveWaitTimeMs: 1_000,
        idleTimeoutMs: 4_000,
        deleteWaitMs: 200,
        ...config,
      });
    }

    function untilStopped(poller: SQSPoller): Promise<void> {
      return new Promise((resolve) => poller.on("stopped", () => resolve()));
    }

    it("receives every message and deletes it after the handler resolves", async () => {
      const queueUrl = await createQueue(2);
      const bodies = ["a", "b", "c", "d", "e"];
      await sendMessages(queueUrl, bodies);

      const poller = createPoller(queueUrl);
      const received = new Set<string>();
      poller.on("message", async (msg) => {
        received.add(msg.body!);
      });
      const stopped = untilStopped(poller);
      poller.start();
      await stopped;

      expect([...received].sort()).toEqual(bodies);
      expect(poller.getStats().deletedMessageCount).toBeGreaterThanOrEqual(bodies.length);
      await expectQueueEmpty(queueUrl, 2);
    });

    it("yields messages via async iteration and deletes them", async () => {
      const queueUrl = await createQueue(2);
      const bodies = ["x", "y", "z"];
      await sendMessages(queueUrl, bodies);

      const received = new Set<string>();
      for await (const msg of createPoller(queueUrl)) {
        received.add(msg.body!);
      }

      expect([...received].sort()).toEqual(bodies);
      await expectQueueEmpty(queueUrl, 2);
    });

    it("redelivers a message whose handler throws", async () => {
      const queueUrl = await createQueue(1);
      await sendMessages(queueUrl, ["retry-me"]);

      const poller = createPoller(queueUrl, { systemAttributeNames: ["ApproximateReceiveCount"] });
      const receiveCounts: string[] = [];
      poller.on("error", () => {});
      poller.on("message", async (msg) => {
        receiveCounts.push(msg.attributes.ApproximateReceiveCount!);
        if (receiveCounts.length === 1) throw new Error("handler failed");
      });
      const stopped = untilStopped(poller);
      poller.start();
      await stopped;

      expect(receiveCounts).toEqual(["1", "2"]);
      await expectQueueEmpty(queueUrl, 1);
    });

    it("release() makes the message visible again immediately", async () => {
      // A 30s queue visibility timeout means redelivery within the test is only possible via release().
      const queueUrl = await createQueue(30);
      await sendMessages(queueUrl, ["release-me"]);

      const poller = createPoller(queueUrl, { idleTimeoutMs: 3_000 });
      let deliveries = 0;
      poller.on("message", async (msg) => {
        if (++deliveries === 1) await msg.release();
      });
      const stopped = untilStopped(poller);
      poller.start();
      await stopped;

      expect(deliveries).toBe(2);
    });

    it("extends the visibility timeout while a slow handler runs", async () => {
      const queueUrl = await createQueue(30);
      await sendMessages(queueUrl, ["slow"]);

      // Without extension the message would become visible again 2s after receipt.
      const poller = createPoller(queueUrl, {
        visibilityTimeoutMs: 2_000,
        extendTimeout: true,
        extendTimeoutAdvanceMs: 1_000,
      });
      let extensions = 0;
      let visibleToOthers: number | undefined;
      poller.on("timeoutExtended", () => extensions++);
      poller.on("message", async () => {
        await sleep(3_500);
        const { Messages } = await sqs.receiveMessage({ QueueUrl: queueUrl, WaitTimeSeconds: 1 });
        visibleToOthers = Messages?.length ?? 0;
        await sleep(1_000);
      });
      const stopped = untilStopped(poller);
      poller.start();
      await stopped;

      expect(visibleToOthers).toBe(0);
      expect(extensions).toBeGreaterThanOrEqual(3);
      expect(poller.getStats().deletedMessageCount).toBe(1);
    });

    it("stop() waits for an in-flight handler and deletes its message", async () => {
      const queueUrl = await createQueue(2);
      await sendMessages(queueUrl, ["in-flight"]);

      const poller = createPoller(queueUrl, { idleTimeoutMs: undefined });
      let handlerFinished = false;
      const handlerStarted = new Promise<void>((resolve) => {
        poller.on("message", async () => {
          resolve();
          await sleep(2_000);
          handlerFinished = true;
        });
      });
      poller.start();
      await handlerStarted;
      const stats = await poller.stop();

      expect(handlerFinished).toBe(true);
      expect(stats.deletedMessageCount).toBe(1);
      await expectQueueEmpty(queueUrl, 2);
    });

    it("abortSignal cancels an in-flight long poll", async () => {
      const queueUrl = await createQueue();
      const ac = new AbortController();
      const poller = createPoller(queueUrl, {
        receiveWaitTimeMs: 20_000,
        idleTimeoutMs: undefined,
        abortSignal: ac.signal,
      });
      const stopped = untilStopped(poller);
      poller.start();
      await sleep(1_000);

      const t0 = Date.now();
      ac.abort();
      await stopped;

      // The pending 20s ReceiveMessage must be cancelled, not run to completion.
      expect(Date.now() - t0).toBeLessThan(5_000);
    });
  },
  60_000
);
