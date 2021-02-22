import {
  DynamoDBClient,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Client as __Client } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions } from "@aws-sdk/types";

import { TranslateConfiguration } from "./commands/types";

export class DynamoDBDocumentClient extends __Client<
  HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DynamoDBClientResolvedConfig
> {
  readonly config: DynamoDBClientResolvedConfig;
  readonly translateConfiguration?: TranslateConfiguration;

  protected constructor(client: DynamoDBClient, translateConfiguration?: TranslateConfiguration) {
    super(client.config);
    this.config = client.config;
    this.middlewareStack = client.middlewareStack;
    this.translateConfiguration = translateConfiguration;
  }

  static from(client: DynamoDBClient, translateConfiguration?: TranslateConfiguration) {
    return new DynamoDBDocumentClient(client, translateConfiguration);
  }

  destroy(): void {
    // no-op
  }
}
