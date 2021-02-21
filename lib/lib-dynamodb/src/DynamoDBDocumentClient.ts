import {
  DynamoDBClient,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Client as __Client } from "@aws-sdk/smithy-client";
import { HttpHandlerOptions } from "@aws-sdk/types";

export class DynamoDBDocumentClient extends __Client<
  HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DynamoDBClientResolvedConfig
> {
  readonly config: DynamoDBClientResolvedConfig;

  protected constructor(client: DynamoDBClient) {
    super(client.config);
    this.config = client.config;
    this.middlewareStack = client.middlewareStack;
  }

  static from(client: DynamoDBClient) {
    return new DynamoDBDocumentClient(client);
  }

  destroy(): void {
    // no-op
  }
}
