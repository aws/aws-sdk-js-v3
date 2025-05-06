import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { runPutCommand } from './commands/PutCommand';
import { runGetCommand } from './commands/GetCommand';

export interface DataMapperOptions {
  documentClient: DynamoDBDocumentClient;
}

export class DataMapper {
  private readonly client: DynamoDBDocumentClient;

  constructor(options: DataMapperOptions) {
    this.client = options.documentClient;
  }

  put<T extends object>(item: T): Promise<T> {
    return runPutCommand({ client: this.client, item });
  }

  get<T>(key: Partial<T>, model: new () => T): Promise<T> {
    return runGetCommand({ client: this.client, key, model });
  }
}