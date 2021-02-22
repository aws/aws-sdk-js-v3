import {
  DynamoDBClient,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Client as __Client } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions } from "@aws-sdk/types";
import { marshallOptions, unmarshallOptions } from "@aws-sdk/util-dynamodb";

export type TranslateConfiguration = {
  marshallOptions?: marshallOptions;
  unmarshallOptions?: unmarshallOptions;
};

export type DynamoDBDocumentClientResolvedConfig = DynamoDBClientResolvedConfig & {
  translateConfiguration?: TranslateConfiguration;
};
export class DynamoDBDocumentClient extends __Client<
  HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DynamoDBDocumentClientResolvedConfig
> {
  readonly config: DynamoDBDocumentClientResolvedConfig;

  protected constructor(client: DynamoDBClient, translateConfiguration?: TranslateConfiguration) {
    super(client.config);
    this.config = client.config;
    this.config.translateConfiguration = translateConfiguration;
    this.middlewareStack = client.middlewareStack;
  }

  static from(client: DynamoDBClient, translateConfiguration?: TranslateConfiguration) {
    return new DynamoDBDocumentClient(client, translateConfiguration);
  }

  destroy(): void {
    // no-op
  }
}
