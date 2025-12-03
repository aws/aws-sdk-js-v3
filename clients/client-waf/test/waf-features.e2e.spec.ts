import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { WAF } from "@aws-sdk/client-waf";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS WAF Features", () => {
  let client: WAF;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new WAF({ region });
  });

  describe("Making a request", () => {
    it("should successfully list rules", async () => {
      const result = await client.listRules({
        Limit: 20,
      });

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Rules)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain WAF stale data exception for fake token", async () => {
      await expect(
        client.createSqlInjectionMatchSet({
          Name: "fake_name",
          ChangeToken: "fake_token",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "WAFStaleDataException",
        })
      );
    });
  });
});
