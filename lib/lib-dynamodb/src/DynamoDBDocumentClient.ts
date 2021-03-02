import {
  DynamoDBClient,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Client as __Client } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { marshallOptions, unmarshallOptions } from "@aws-sdk/util-dynamodb";

export type TranslateConfig = {
  marshallOptions?: marshallOptions;
  unmarshallOptions?: unmarshallOptions;
};

export type DynamoDBDocumentClientResolvedConfig = DynamoDBClientResolvedConfig & {
  translateConfig?: TranslateConfig;
};

export class DynamoDBDocumentClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DynamoDBDocumentClientResolvedConfig
> {
  readonly config: DynamoDBDocumentClientResolvedConfig;

  protected constructor(client: DynamoDBClient, translateConfig?: TranslateConfig) {
    super(client.config);
    this.config = client.config;
    this.config.translateConfig = translateConfig;
    this.middlewareStack = client.middlewareStack;
  }

  static from(client: DynamoDBClient, translateConfig?: TranslateConfig) {
    return new DynamoDBDocumentClient(client, translateConfig);
  }

  destroy(): void {
    // A no-op, since client is passed in constructor
  }
}
