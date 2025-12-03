import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { SQS } from "@aws-sdk/client-sqs";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("SQS Messages", () => {
  let client: SQS;
  let region: string;
  let queueUrl: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new SQS({ region });
  });

  describe("Send an SQS message", () => {
    it("should send message with correct MD5 and receive it", async () => {
      // Create queue
      const createResult = await client.createQueue({
        QueueName: `aws-js-sdk-${Date.now()}`,
      });

      queueUrl = createResult.QueueUrl || "";

      // Send message "HELLO"
      const sendResult = await client.sendMessage({
        QueueUrl: queueUrl,
        MessageBody: "HELLO",
      });

      // Result should include a message ID
      expect(sendResult.MessageId!.length).toBeGreaterThan(0);

      // Result should have MD5 digest of "eb61eead90e3b899c6bcbe27ac581660"
      expect(sendResult.MD5OfMessageBody).toBe("eb61eead90e3b899c6bcbe27ac581660");

      // Eventually receive "HELLO" from the queue
      const receiveResult = await client.receiveMessage({
        QueueUrl: queueUrl,
      });

      expect(receiveResult.Messages?.[0]?.Body).toBe("HELLO");

      // Cleanup
      await client.deleteQueue({ QueueUrl: queueUrl });
    });
  });

  describe("Binary payloads", () => {
    it("should send message with binary attribute", async () => {
      // Create queue
      const createResult = await client.createQueue({
        QueueName: `aws-js-sdk-${Date.now()}`,
      });

      queueUrl = createResult.QueueUrl || "";

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

      // Result should have MD5 digest of "eb61eead90e3b899c6bcbe27ac581660"
      expect(sendResult.MD5OfMessageBody).toBe("eb61eead90e3b899c6bcbe27ac581660");

      // Eventually receive "HELLO" from the queue with binary attribute
      const receiveResult = await client.receiveMessage({
        QueueUrl: queueUrl,
        MessageAttributeNames: ["binary"],
      });

      expect(receiveResult.Messages?.[0]?.Body).toBe("HELLO");

      // Verify binary attribute matches original: "1,2,3"
      const binaryValue = receiveResult.Messages?.[0]?.MessageAttributes?.binary?.BinaryValue;
      expect(binaryValue!.toString()).toBe("1,2,3");

      // Cleanup
      await client.deleteQueue({ QueueUrl: queueUrl });
    });
  });
});
