import { WAF } from "@aws-sdk/client-waf";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(WAF.name, () => {
  let client: WAF;

  beforeAll(async () => {
    client = new WAF({ region: "us-west-2" });
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
