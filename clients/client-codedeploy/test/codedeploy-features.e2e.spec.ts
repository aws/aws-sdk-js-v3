import { CodeDeploy } from "@aws-sdk/client-codedeploy";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(CodeDeploy.name, () => {
  let client: CodeDeploy;

  beforeAll(async () => {
    client = new CodeDeploy({ region: "us-west-2" });
  });

  describe("Listing Applications", () => {
    it("should return applications list when listApplications is called", async () => {
      const result = await client.listApplications({});

      expect(Array.isArray(result.applications)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should handle ApplicationNameRequiredException for empty application name", async () => {
      await expect(
        client.createApplication({
          applicationName: "", // Empty name should cause ApplicationNameRequiredException
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ApplicationNameRequiredException",
        })
      );
    });
  });
});
