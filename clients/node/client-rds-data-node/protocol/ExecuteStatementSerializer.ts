import { HttpRequest } from "@aws-sdk/types";
import { ExecuteStatementRequest } from "../models/com/amazon/rdsdataservice";
import { SqlParameterListAwsRestJson1_1Serialize } from "./AwsRestJson1_1Serializers";

export function ExecuteStatementSerializer(
  input: ExecuteStatementRequest,
  protocol: string
): HttpRequest {
  switch (protocol) {
    case "aws.rest-json-1.1":
      return ExecuteStatementAwsRestJson1_1Serialize(input);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}

function ExecuteStatementAwsRestJson1_1Serialize(
  input: ExecuteStatementRequest
): HttpRequest {
  let body: any = {};
  if (input.resourceArn) {
    body.resourceArn = input.resourceArn;
  }

  if (input.secretArn) {
    body.secretArn = input.secretArn;
  }

  if (input.sql) {
    body.sql = input.sql;
  }

  if (input.database) {
    body.database = input.database;
  }

  if (input.schema) {
    body.schema = input.schema;
  }

  if (input.parameters) {
    body.parameters = SqlParameterListAwsRestJson1_1Serialize(input.parameters);
  }

  if (input.transactionId) {
    body.transactionId = input.transactionId;
  }

  if (input.includeResultMetadata) {
    body.includeResultMetadata = input.includeResultMetadata;
  }

  if (input.continueAfterTimeout) {
    body.continueAfterTimeout = input.continueAfterTimeout;
  }

  return {
    method: "POST",
    hostname: "rdsdataservice.us-east-1.amazonaws.com",
    path: "/execute",
    protocol: "https:",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  };
}
