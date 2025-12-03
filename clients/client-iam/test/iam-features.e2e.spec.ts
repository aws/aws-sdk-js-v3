import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { IAM } from "@aws-sdk/client-iam";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("IAM Features", () => {
  let client: IAM;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new IAM({ region });
  });

  describe("Users", () => {
    it("should create IAM user", async () => {
      const username = `js-test-${Date.now()}`;

      const result = await client.createUser({
        UserName: username,
      });

      expect(result.User?.UserName).toBe(username);

      await client.deleteUser({ UserName: username });
    });
  });

  describe("Roles", () => {
    it("should create IAM role", async () => {
      const roleName = `aws-sdk-js-${Date.now()}`;

      const result = await client.createRole({
        RoleName: roleName,
        AssumeRolePolicyDocument: JSON.stringify({
          Version: "2012-10-17",
          Statement: [{ Effect: "Allow", Principal: { Service: "ec2.amazonaws.com" }, Action: "sts:AssumeRole" }],
        }),
      });

      expect(result.Role?.RoleName).toBe(roleName);

      await client.deleteRole({ RoleName: roleName });
    });
  });

  describe("Error handling", () => {
    it("should contain entity already exists error for duplicate user", async () => {
      const username = `js-test-dupe-${Date.now()}`;

      await client.createUser({ UserName: username });

      try {
        await expect(client.createUser({ UserName: username })).rejects.toThrow(
          expect.objectContaining({
            name: "EntityAlreadyExistsException",
          })
        );
      } finally {
        await client.deleteUser({ UserName: username });
      }
    });
  });
});
