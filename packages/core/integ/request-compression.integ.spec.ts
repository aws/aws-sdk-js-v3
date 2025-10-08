import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { type MetricDatum, CloudWatch } from "@aws-sdk/client-cloudwatch";
import type { AwsCredentialIdentity } from "@smithy/types";
import { describe, test as it } from "vitest";

describe("request compression", () => {
  const credentials: AwsCredentialIdentity = {
    accessKeyId: "INTEG_TEST",
    secretAccessKey: "INTEG_TEST",
  };

  const smallMetricData: MetricDatum[] = [
    {
      MetricName: "TestMetric1",
      Value: 42,
      Unit: "Count",
      Timestamp: new Date(0),
      Dimensions: [
        {
          Name: "Environment",
          Value: "Test",
        },
      ],
    },
  ];

  const largeMetricData = Array.from({ length: 1000 }).map(() => smallMetricData[0]);

  it("should not compress small payloads", async () => {
    const cw = new CloudWatch({
      credentials,
      region: "us-west-2",
    });

    requireRequestsFrom(cw).toMatch({
      headers: {
        "content-encoding": /undefined/,
      },
    });

    await cw.putMetricData({
      Namespace: "TestMetrics",
      MetricData: smallMetricData,
    });
  });

  it("should compress larger payloads", async () => {
    const cw = new CloudWatch({
      credentials,
      region: "us-west-2",
    });

    requireRequestsFrom(cw).toMatch({
      headers: {
        "content-encoding": /^gzip$/,
      },
    });

    await cw.putMetricData({
      Namespace: "TestMetrics",
      MetricData: largeMetricData,
    });
  });

  describe("compression configuration", () => {
    it("can be shut off", async () => {
      const cw = new CloudWatch({
        credentials,
        disableRequestCompression: true,
        region: "us-west-2",
      });

      requireRequestsFrom(cw).toMatch({
        headers: {
          "content-encoding": /undefined/,
        },
      });

      await cw.putMetricData({
        Namespace: "TestMetrics",
        MetricData: largeMetricData,
      });
    });

    it("should compress payloads beyond the specified limit", async () => {
      const cw = new CloudWatch({
        credentials,
        requestMinCompressionSizeBytes: 100_000,
        region: "us-west-2",
      });

      requireRequestsFrom(cw).toMatch({
        headers: {
          "content-encoding": /^gzip$/,
        },
      });

      await cw.putMetricData({
        Namespace: "TestMetrics",
        MetricData: largeMetricData,
      });
    });

    it("should not compress payloads below the specified limit", async () => {
      const cw = new CloudWatch({
        credentials,
        requestMinCompressionSizeBytes: 300_000,
        region: "us-west-2",
      });

      requireRequestsFrom(cw).toMatch({
        headers: {
          "content-encoding": /undefined/,
        },
      });

      await cw.putMetricData({
        Namespace: "TestMetrics",
        MetricData: largeMetricData,
      });
    });
  });
});
