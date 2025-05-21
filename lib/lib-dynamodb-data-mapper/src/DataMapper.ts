import {
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
  PutCommand,
  PutCommandInput,
  PutCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import type { HttpHandlerOptions } from '@smithy/types';

import { registerSchemaMiddleware } from './middleware/registerSchemaMiddleware';

export interface DataMapperConfig {
  docClient: DynamoDBDocumentClient;
}

export class DataMapper {
  private readonly client: DynamoDBDocumentClient;

  constructor(config: DataMapperConfig) {
    this.client = config.docClient;
    registerSchemaMiddleware(this.client);
  }

  async put(input: PutCommandInput, options?: HttpHandlerOptions): Promise<PutCommandOutput> {
    return this.client.send(new PutCommand(input), options);
  }

  async get(input: GetCommandInput, options?: HttpHandlerOptions): Promise<GetCommandOutput> {
    return this.client.send(new GetCommand(input), options);
  }
}