import { SQS } from "@aws-sdk/client-sqs";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

// Promise-based eventually function matching original Cucumber behavior
async function eventually<T>(
  operation: () => Promise<T>,
  condition: (result: T) => boolean,
  options: { delay?: number; backoff?: number; maxTime?: number } = {}
): Promise<T> {
  const { delay: initialDelay = 0, backoff = 500, maxTime = 5 } = options;

  let delay = initialDelay;
  const started = Date.now();

  while (true) {
    const result = await operation();

    if (condition(result)) {
      return result;
    }

    const now = Date.now();
    if (now - started >= maxTime * 1000) {
      throw new Error("Eventually block timed out");
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
    delay += backoff;
  }
}

describe("SQS Queues", () => {
  let client: SQS;
  const createdQueues: string[] = [];

  beforeAll(async () => {
    client = new SQS({ region: "us-west-2" });
  });

  afterAll(async () => {
    // Cleanup all created queues
    for (const queueUrl of createdQueues) {
      try {
        await client.deleteQueue({ QueueUrl: queueUrl });
      } catch (error) {
        console.warn(`Failed to delete queue ${queueUrl}:`, error);
      }
    }
  });

  describe("Creating and deleting queues", () => {
    it("should create queues and eventually list them", async () => {
      // Create first queue
      const createResult1 = await client.createQueue({
        QueueName: `aws-js-sdk-${Date.now()}`,
      });
      const queueUrl1 = createResult1.QueueUrl!;
      createdQueues.push(queueUrl1);

      // Create second queue
      const createResult2 = await client.createQueue({
        QueueName: `aws-js-sdk-${Date.now() + 1}`,
      });
      const queueUrl2 = createResult2.QueueUrl!;
      createdQueues.push(queueUrl2);

      // Wait for queues to be eventually consistent and available in list
      const listResult = await eventually(
        () => client.listQueues({ QueueNamePrefix: "aws-js-sdk-" }),
        (result) => {
          const queueUrls = result.QueueUrls || [];
          return createdQueues.every((createdQueue) => queueUrls.includes(createdQueue));
        },
        { maxTime: 15 }
      );

      // Check that created queues exist in the list
      for (const createdQueue of createdQueues) {
        expect(listResult.QueueUrls || []).toContain(createdQueue);
      }
    });
  });
});
