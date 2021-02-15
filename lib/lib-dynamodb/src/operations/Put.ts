import { DynamoDB, DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { marshallOptions as __marshallOptions, unmarshallOptions as __unmarshallOptions } from "@aws-sdk/util-dynamodb";

import { PutNativeItemCommand, PutNativeItemCommandInput } from "../commands/PutNativeItemCommand";

export interface PutConfiguration {
  client: DynamoDB | DynamoDBClient;
  marshallOptions: __marshallOptions;
  unmarshallOptions: __unmarshallOptions;
}

export const Put = (config: PutConfiguration, input: PutNativeItemCommandInput) => {
  const { client, marshallOptions, unmarshallOptions } = config;
  return client.send(new PutNativeItemCommand(input, { marshallOptions, unmarshallOptions }));
};
