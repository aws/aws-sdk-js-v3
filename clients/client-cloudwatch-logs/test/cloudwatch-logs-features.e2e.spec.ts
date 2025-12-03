import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CloudWatchLogs, InvalidParameterException } from "@aws-sdk/client-cloudwatch-logs";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe("CloudWatch Logs Features", () => {
  let client: CloudWatchLogs;
  let region: string;
  const createdLogGroups: string[] = [];

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CloudWatchLogs({ region });
  });

  const generateLogGroupName = (prefix: string) => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    return prefix ? `${prefix}-${timestamp}-${random}` : "";
  };

  afterAll(async () => {
    // Cleanup created log groups
    for (const logGroupName of createdLogGroups) {
      try {
        await client.deleteLogGroup({ logGroupName });
      } catch (error) {
        console.warn(`Failed to cleanup log group ${logGroupName}:`, error);
      }
    }
  });

  describe("Log Groups", () => {
    it("should create a log group and list it", async () => {
      // Given I create a CloudWatch logGroup with prefix "aws-js-sdk"
      const logGroupName = generateLogGroupName("aws-js-sdk");
      createdLogGroups.push(logGroupName);

      await client.createLogGroup({ logGroupName });

      // And I list the CloudWatch logGroups
      const response = await client.describeLogGroups({
        logGroupNamePrefix: logGroupName,
      });

      // Then the list should contain the CloudWatch logGroup
      expect(response.logGroups?.some((group) => group.logGroupName === logGroupName)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should throw InvalidParameterException for empty prefix", async () => {
      const logGroupName = generateLogGroupName("");
      await expect(client.createLogGroup({ logGroupName })).rejects.toThrow(InvalidParameterException);
    });
  });
});
