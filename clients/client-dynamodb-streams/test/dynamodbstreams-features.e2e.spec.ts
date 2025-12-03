import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { DynamoDBStreams } from "@aws-sdk/client-dynamodb-streams";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon DynamoDB Streams Features", () => {
  let client: DynamoDBStreams;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new DynamoDBStreams({ region });
  });

  describe("Listing streams", () => {
    it("should successfully list streams", async () => {
      const result = await client.listStreams({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Streams)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for invalid stream ARN", async () => {
      await expect(
        client.describeStream({
          StreamArn: "fake-stream",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
