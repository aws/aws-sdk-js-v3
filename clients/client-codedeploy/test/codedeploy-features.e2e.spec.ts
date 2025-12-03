import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CodeDeploy } from "@aws-sdk/client-codedeploy";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-codedeploy", () => {
  let client: CodeDeploy;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CodeDeploy({ region });
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
