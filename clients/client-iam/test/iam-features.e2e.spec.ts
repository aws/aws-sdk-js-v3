import { IAM } from "@aws-sdk/client-iam";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe(IAM.name, () => {
  let client: IAM;
  const createdUsers: string[] = [];
  const createdRoles: string[] = [];

  beforeAll(async () => {
    client = new IAM({ region: "us-west-2" });
  });

  afterAll(async () => {
    // Cleanup all created users
    for (const username of createdUsers) {
      try {
        await client.deleteUser({ UserName: username });
      } catch (error) {
        console.warn(`Failed to delete user ${username}:`, error);
      }
    }

    // Cleanup all created roles
    for (const roleName of createdRoles) {
      try {
        await client.deleteRole({ RoleName: roleName });
      } catch (error) {
        console.warn(`Failed to delete role ${roleName}:`, error);
      }
    }
  });

  describe("Users", () => {
    it("should create IAM user", async () => {
      const username = `js-test-${Date.now()}`;

      const result = await client.createUser({
        UserName: username,
      });
      createdUsers.push(username);

      expect(result.User?.UserName).toBe(username);
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
      createdRoles.push(roleName);

      expect(result.Role?.RoleName).toBe(roleName);
    });
  });

  describe("Error handling", () => {
    it("should contain entity already exists error for duplicate user", async () => {
      const username = `js-test-dupe-${Date.now()}`;

      await client.createUser({ UserName: username });
      createdUsers.push(username);

      await expect(client.createUser({ UserName: username })).rejects.toThrow(
        expect.objectContaining({
          name: "EntityAlreadyExistsException",
        })
      );
    });
  });
});
