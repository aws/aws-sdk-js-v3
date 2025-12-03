import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CloudWatchEvents } from "@aws-sdk/client-cloudwatch-events";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-cloudwatch-events", () => {
  let client: CloudWatchEvents;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CloudWatchEvents({ region });
  });

  describe("Making a request", () => {
    it("should successfully list rules and return Rules as a list", async () => {
      const result = await client.listRules({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Rules)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should handle ResourceNotFoundException for fake rule", async () => {
      await expect(client.describeRule({ Name: "fake_rule" })).rejects.toThrow(
        expect.objectContaining({
          name: "ResourceNotFoundException",
        })
      );
    });
  });
});
