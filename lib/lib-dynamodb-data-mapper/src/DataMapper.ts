import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { runGetCommand } from './commands/GetCommand';
import { runPutCommand } from './commands/PutCommand';

export interface DataMapperConfig {
  docClient: DynamoDBDocumentClient;
}

export class DataMapper {
  private readonly client: DynamoDBDocumentClient;

  constructor(config: DataMapperConfig) {
    this.client = config.docClient;
  }

  put<T extends object>(item: T): Promise<T> {
    return runPutCommand({ client: this.client, item });
  }

  get<T extends object>(key: Partial<T>, model: new () => T): Promise<T> {
    return runGetCommand({ client: this.client, key, model });
  }
}