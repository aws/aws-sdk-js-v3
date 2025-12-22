import { SQS } from "@aws-sdk/client-sqs";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe(SQS.name, () => {
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

  describe("Send an SQS message", () => {
    it("should send message with correct MD5 and receive it", async () => {
      // Create queue
      const createResult = await client.createQueue({
        QueueName: `aws-js-sdk-${Date.now()}`,
      });

      const queueUrl = createResult.QueueUrl || "";
      createdQueues.push(queueUrl);

      const sendResult = await client.sendMessage({
        QueueUrl: queueUrl,
        MessageBody: "HELLO",
      });

      // Result should include a message ID
      expect(sendResult.MessageId!.length).toBeGreaterThan(0);

      expect(sendResult.MD5OfMessageBody).toBe("eb61eead90e3b899c6bcbe27ac581660");

      // Eventually receive "HELLO" from the queue
      const receiveResult = await client.receiveMessage({
        QueueUrl: queueUrl,
        WaitTimeSeconds: 20,
      });

      expect(receiveResult.Messages?.[0]?.Body).toBe("HELLO");
    });
  });

  describe("Binary payloads", () => {
    it("should send message with binary attribute", async () => {
      // Create queue
      const createResult = await client.createQueue({
        QueueName: `aws-js-sdk-${Date.now()}`,
      });

      const queueUrl = createResult.QueueUrl || "";
      createdQueues.push(queueUrl);

      // Send message "HELLO" with binary attribute.
      const sendResult = await client.sendMessage({
        QueueUrl: queueUrl,
        MessageBody: "HELLO",
        MessageAttributes: {
          binary: {
            DataType: "Binary",
            BinaryValue: Buffer.from([1, 2, 3]),
          },
        },
      });

      // Result should include a message ID
      expect(sendResult.MessageId!.length).toBeGreaterThan(0);

      expect(sendResult.MD5OfMessageBody).toBe("eb61eead90e3b899c6bcbe27ac581660");

      // Eventually receive "HELLO" from the queue with binary attribute
      const receiveResult = await client.receiveMessage({
        QueueUrl: queueUrl,
        MessageAttributeNames: ["binary"],
        WaitTimeSeconds: 20,
      });

      expect(receiveResult.Messages?.[0]?.Body).toBe("HELLO");

      // Verify binary attribute matches original: "1,2,3"
      const binaryValue = receiveResult.Messages?.[0]?.MessageAttributes?.binary?.BinaryValue;
      expect(binaryValue!.toString()).toBe("1,2,3");
    });
  });
});
