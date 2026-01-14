import { CloudWatchLogs, InvalidParameterException } from "@aws-sdk/client-cloudwatch-logs";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

describe(CloudWatchLogs.name, () => {
  let client: CloudWatchLogs;
  const createdLogGroups: string[] = [];

  beforeAll(async () => {
    client = new CloudWatchLogs({ region: "us-west-2" });
  });

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
      // Given I create a CloudWatch logGroup with prefix "aws-sdk-js"
      const logGroupName = `aws-sdk-js-${crypto.randomUUID()}`;
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
      await expect(client.createLogGroup({ logGroupName: "" })).rejects.toThrow(InvalidParameterException);
    });
  });
});
