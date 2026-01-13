import { CloudWatch } from "@aws-sdk/client-cloudwatch";
import { afterEach, beforeAll, describe, expect, test as it } from "vitest";

describe(CloudWatch.name, () => {
  let client: CloudWatch;

  beforeAll(async () => {
    client = new CloudWatch({ region: "us-west-2" });
  });

  describe("Alarms", () => {
    describe("Normal flow", () => {
      const alarmName = `aws-js-sdk-alarm-${Date.now()}`;

      it("should create, list, and find CloudWatch alarm", async () => {
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
        const result = await client.describeAlarms({ AlarmNames: [alarmName] });

        expect(Array.isArray(result.MetricAlarms)).toBe(true);

        // Check if our alarm is in the list
        const foundAlarm = result.MetricAlarms?.find((alarm) => alarm.AlarmName === alarmName);
        expect(foundAlarm?.AlarmName).toBe(alarmName);
      });

      afterEach(async () => {
        await client.deleteAlarms({ AlarmNames: [alarmName] }).catch(() => {
          // Ignore errors during cleanup (e.g. if alarm was already deleted)
        });
      });
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
