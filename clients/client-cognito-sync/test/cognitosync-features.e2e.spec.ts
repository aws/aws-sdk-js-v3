import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CognitoSync } from "@aws-sdk/client-cognito-sync";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(CognitoSync.name, () => {
  let client: CognitoSync;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CognitoSync({ region });
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
