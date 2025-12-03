import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { SNS } from "@aws-sdk/client-sns";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Simple Notification Service Features", () => {
  let client: SNS;
  let region: string;
  let topicArn: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new SNS({ region });
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
