import { describe, test as it, expect } from "vitest";

import { S3Client } from "@aws-sdk/client-s3";
import { LambdaClient } from "@aws-sdk/client-lambda";
import { EMRClient } from "@aws-sdk/client-emr";
import { SageMakerClient } from "@aws-sdk/client-sagemaker";
import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { STSClient } from "@aws-sdk/client-sts";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { CloudFormationClient } from "@aws-sdk/client-cloudformation";
import { SFNClient } from "@aws-sdk/client-sfn";

const clients = [
  new S3Client(),
  new LambdaClient(),
  new EMRClient(),
  new SageMakerClient(),
  new CloudFormationClient(),
  new CloudWatchClient(),
  new STSClient(),
  new DynamoDBClient(),
  new SFNClient(),
];

const serviceIds = [
  "S3",
  "Lambda",
  "EMR",
  "SageMaker",
  "CloudFormation",
  "CloudWatch",
  "STS",
  "DynamoDB",
  "SFN",
] as string[];

describe("service ids (various clients)", () => {
  for (const [i, client] of Object.entries(clients)) {
    it("should have a service id matching its class name", () => {
      const index = parseInt(i);

      expect(client.config.serviceId).toEqual(serviceIds[index]);
      expect(client.constructor.name.replace(/Client$/, "")).toEqual(serviceIds[index]);
    });
  }
});
