import { HttpRequest } from "@aws-sdk/types";
import { ExecuteStatementRequest } from "../models/com/amazon/rdsdataservice";
import { SqlParameterListAwsRestJson1_1Serialize } from "./AwsRestJson1_1Serializers";
import { HttpResponse } from '@aws-sdk/protocol-http'

export function ExecuteStatementDeserializer(
  output: HttpResponse,
  protocol: string
): any {
  switch (protocol) {
    case "aws.rest-json-1.1":
      return ExecuteStatementAwsRestJson1_1Deserialize(output);
    default:
      throw new Error("Unknown protocol, use aws.rest-json-1.1");
  }
}

function ExecuteStatementAwsRestJson1_1Deserialize(
  input: HttpResponse
): any {
  return { data: 'parsed' }
}
