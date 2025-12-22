import { SNS } from "@aws-sdk/client-sns";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(SNS.name, () => {
  let client: SNS;
  let topicArn: string;

  beforeAll(async () => {
    client = new SNS({ region: "us-west-2" });
  });

  describe("Topics", () => {
    it("should create and list SNS topics", async () => {
      const createResult = await client.createTopic({
        Name: `aws-js-sdk-${Date.now()}`,
      });

      topicArn = createResult.TopicArn || "";
      expect(topicArn).toBeTruthy();

      const listResult = await client.listTopics({});
      expect(Array.isArray(listResult.Topics)).toBe(true);

      // Cleanup
      await client.deleteTopic({ TopicArn: topicArn });
    });
  });

  describe("Error handling", () => {
    it("should contain invalid parameter error for invalid ARN", async () => {
      await expect(
        client.getTopicAttributes({
          TopicArn: "invalid-arn",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidParameterException",
        })
      );
    });
  });
});
