import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { Kinesis } from "@aws-sdk/client-kinesis";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon Kinesis Features", () => {
  let client: Kinesis;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new Kinesis({ region });
  });

  describe("Error handling", () => {
    it("should contain resource not found error for non-existent stream", async () => {
      await expect(
        client.describeStream({
          StreamName: "non-existent-stream",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ResourceNotFoundException",
        })
      );
    });
  });
});
