import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { ElasticBeanstalk } from "@aws-sdk/client-elastic-beanstalk";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("AWS Elastic Beanstalk Features", () => {
  let client: ElasticBeanstalk;
  let region: string;
  let applicationName: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new ElasticBeanstalk({ region });
  });

  describe("Creating applications and application versions", () => {
    it("should create application, version, and describe them", async () => {
      applicationName = `aws-js-sdk-${Date.now()}`;

      // Create Elastic Beanstalk application
      const createAppResult = await client.createApplication({
        ApplicationName: applicationName,
        Description: "Test application for SDK",
      });

      expect(createAppResult.Application?.ApplicationName).toBe(applicationName);

      // Create application version
      const createVersionResult = await client.createApplicationVersion({
        ApplicationName: applicationName,
        VersionLabel: "1.0.0",
        Description: "Test version for SDK",
      });

      expect(createVersionResult.ApplicationVersion?.VersionLabel).toBe("1.0.0");

      // Describe the application
      const describeResult = await client.describeApplications({
        ApplicationNames: [applicationName],
      });

      // The result should contain the Elastic Beanstalk application name and version
      expect(describeResult.Applications?.[0]?.ApplicationName).toBe(applicationName);
      expect(describeResult.Applications?.[0]?.Versions).toContain("1.0.0");

      // Cleanup - delete application version and application
      await client.deleteApplicationVersion({
        ApplicationName: applicationName,
        VersionLabel: "1.0.0",
      });

      await client.deleteApplication({
        ApplicationName: applicationName,
      });
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for empty application name", async () => {
      await expect(
        client.createApplication({
          ApplicationName: "",
          Description: "Test application",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationError",
        })
      );
    });
  });
});
