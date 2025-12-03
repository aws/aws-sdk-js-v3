import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CloudWatch } from "@aws-sdk/client-cloudwatch";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-cloudwatch", () => {
  let client: CloudWatch;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CloudWatch({ region });
  });

  describe("Alarms", () => {
    it("should create, list, and find CloudWatch alarm", async () => {
      const alarmName = `aws-js-sdk-alarm-${Date.now()}`;

      // Create alarm
      await client.putMetricAlarm({
        AlarmName: alarmName,
        ComparisonOperator: "GreaterThanThreshold",
        EvaluationPeriods: 1,
        AlarmDescription: "Test alarm for SDK",
        MetricName: "CPUUtilization",
        Namespace: "AWS/EC2",
        Statistic: "Average",
        Threshold: 80,
        Period: 300,
      });

      // List alarms
      const result = await client.describeAlarms({});

      expect(Array.isArray(result.MetricAlarms)).toBe(true);

      // Check if our alarm is in the list
      const foundAlarm = result.MetricAlarms?.find((alarm) => alarm.AlarmName === alarmName);
      expect(foundAlarm?.AlarmName).toBe(alarmName);

      // Cleanup
      await client.deleteAlarms({ AlarmNames: [alarmName] });
    });
  });

  describe("Error handling", () => {
    it("should handle ValidationError for empty alarm name", async () => {
      await expect(
        client.putMetricAlarm({
          AlarmName: "", // Empty name should cause ValidationError
          ComparisonOperator: "GreaterThanThreshold",
          EvaluationPeriods: 1,
          MetricName: "CPUUtilization",
          Namespace: "AWS/EC2",
          Statistic: "Average",
          Threshold: 80,
          Period: 300,
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationError",
        })
      );
    });
  });
});
