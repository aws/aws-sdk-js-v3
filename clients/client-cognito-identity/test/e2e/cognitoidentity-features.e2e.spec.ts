import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CognitoIdentity } from "@aws-sdk/client-cognito-identity";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-cognito-identity", () => {
  let client: CognitoIdentity;
  let region: string;
  let createdIdentityPoolId: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CognitoIdentity({ region });
  });

  afterAll(async () => {
    if (createdIdentityPoolId) {
      try {
        await client.deleteIdentityPool({ IdentityPoolId: createdIdentityPoolId });
      } catch (error) {
        console.warn("Failed to clean up identity pool:", error);
      }
    }
  });

  describe("Identity Pools", () => {
    it("should create and describe a Cognito identity pool", async () => {
      // Create identity pool
      const createResult = await client.createIdentityPool({
        IdentityPoolName: `awssdkjs-test-${Date.now()}`,
        AllowUnauthenticatedIdentities: true,
      });

      expect(createResult.IdentityPoolId).toBeDefined();
      createdIdentityPoolId = createResult.IdentityPoolId!;

      // Describe the identity pool
      const describeResult = await client.describeIdentityPool({
        IdentityPoolId: createdIdentityPoolId,
      });

      expect(describeResult).toBeDefined();
      expect(describeResult.IdentityPoolId).toBe(createdIdentityPoolId);
    });
  });

  describe("Error handling", () => {
    it("should handle ValidationException for empty identity pool name", async () => {
      await expect(
        client.createIdentityPool({
          IdentityPoolName: "", // Empty name should cause ValidationException
          AllowUnauthenticatedIdentities: true,
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
