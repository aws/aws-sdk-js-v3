import { CognitoSync } from "@aws-sdk/client-cognito-sync";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(CognitoSync.name, () => {
  let client: CognitoSync;

  beforeAll(async () => {
    client = new CognitoSync({ region: "us-west-2", credentials: aws?.testCredentials });
  });

  describe("Identity Pool Usage", () => {
    it("should successfully list identity pool usage", async () => {
      const result = await client.listIdentityPoolUsage({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(result.IdentityPoolUsages).toBeDefined();
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for invalid parameters", async () => {
      await expect(
        client.listDatasets({
          IdentityPoolId: "INVALID",
          IdentityId: "A:B:C",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          message: expect.stringContaining("validation errors detected"),
        })
      );
    });
  });
});
