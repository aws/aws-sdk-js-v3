import {
  CloudWatchClient,
  CloudWatchServiceException,
  GetDashboardCommand,
  GetInsightRuleReportCommand,
  MissingRequiredParameterException,
  PutMetricAlarmCommand,
  ResourceNotFound,
} from "@aws-sdk/client-cloudwatch";
import { AwsJson1_0Protocol, AwsQueryProtocol, AwsSmithyRpcV2CborProtocol } from "@aws-sdk/core";
import { describe, expect, test as it } from "vitest";

describe("CloudWatch Query Compatibility E2E", () => {
  const cloudwatch = {
    cbor: new CloudWatchClient({
      region: "us-west-2",
      protocol: new AwsSmithyRpcV2CborProtocol({
        defaultNamespace: "com.amazonaws.cloudwatch",
        awsQueryCompatible: true,
      }),
    }),
    query: new CloudWatchClient({
      region: "us-west-2",
      protocol: new AwsQueryProtocol({
        defaultNamespace: "com.amazonaws.cloudwatch",
        xmlNamespace: "http://monitoring.amazonaws.com/doc/2010-08-01/",
        version: "2010-08-01",
      }),
    }),
    json: new CloudWatchClient({
      region: "us-west-2",
      protocol: new AwsJson1_0Protocol({
        defaultNamespace: "com.amazonaws.cloudwatch",
        serviceTarget: "GraniteServiceVersion20100801",
        awsQueryCompatible: true,
      }),
    }),
  };

  for (const client of Object.values(cloudwatch)) {
    const ctorName = client.config.protocol.constructor.name;

    it(`resolve errors with the query compat header and not the __type field (${ctorName})`, async () => {
      const error = await client
        .send(
          new GetDashboardCommand({
            DashboardName: "does-not-exist",
          })
        )
        .catch((_) => _);

      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(CloudWatchServiceException);
      expect(error).toBeInstanceOf(ResourceNotFound);

      expect(error.constructor.prototype.name).toBe("Error");
      expect(error.constructor.name).toBe("ResourceNotFound");
      expect(error.name).toBe("ResourceNotFound");

      expect(error.message).toBe("Dashboard does-not-exist does not exist");
      expect(error.Type).toEqual("Sender");
      expect(error.Code).toEqual("ResourceNotFound");
      expect(error.Error).toEqual({
        Type: "Sender",
        Code: "ResourceNotFound",
        Message: "Dashboard does-not-exist does not exist",
      });
      expect(error.$metadata.httpStatusCode).toBe(404);
    });

    it(`have consistent error structure (modeled title-case 'Message') ${ctorName}`, async () => {
      const error = await client
        .send(
          new PutMetricAlarmCommand({
            AlarmName: "",
            ComparisonOperator: "GreaterThanThreshold",
            EvaluationPeriods: 5,
            MetricName: "CPUUtilization",
            Namespace: "AWS/EC2",
            Period: 60,
            Statistic: "Average",
            Threshold: 50.0,
          })
        )
        .catch((_) => _);

      const msg =
        `1 validation error detected: Value '' at 'alarmName' failed to satisfy ` +
        `constraint: Member must have length greater than or equal to 1`;

      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(CloudWatchServiceException);

      expect(error.constructor.prototype.name).toBe("Error");
      expect(error.constructor.name).toBe("CloudWatchServiceException");
      expect(error.name).toBe("ValidationError");

      expect(error.message).toBe(msg);
      expect(error.Type).toEqual("Sender");
      expect(error.Code).toEqual("ValidationError");
      expect(error.Error).toEqual({
        Type: "Sender",
        Code: "ValidationError",
        Message: msg,
      });
      expect(error.$metadata.httpStatusCode).toBe(400);
    });

    it(`have consistent error structure (modeled lowercase 'message') ${ctorName}`, async () => {
      const error = await client.send(new GetInsightRuleReportCommand({} as any)).catch((_) => _);
      const msg = `MISSING_RULE_NAME: The RuleName parameter must be present.`;

      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(CloudWatchServiceException);
      expect(error).toBeInstanceOf(MissingRequiredParameterException);

      expect(error.constructor.prototype.name).toBe("Error");
      expect(error.constructor.name).toBe("MissingRequiredParameterException");
      expect(error.name).toBe("MissingRequiredParameterException");

      expect(error.message).toBe(msg);
      expect(error.Type).toEqual("Sender");
      expect(error.Code).toEqual("MissingParameter");
      expect(error.Error).toEqual({
        Type: "Sender",
        Code: "MissingParameter",
        Message: msg,
      });
      expect(error.$metadata.httpStatusCode).toBe(400);
    });
  }
});
