/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  type QueryCommandInput,
  type ScanCommandInput,
  DeleteItemCommandInput,
  DynamoDBClient,
  GetItemCommand,
  PutItemCommand,
  PutItemCommandInput,
} from '@aws-sdk/client-dynamodb';
import { marshallOptions } from '@aws-sdk/util-dynamodb';
import { HttpHandlerOptions } from '@smithy/types';

import { DataMapperConfig, IDataMapper } from './interfaces/';
import { DataMarshaller } from './marshaller/DataMarshaller';
import { getSchema } from './schema/';
import { getTableName } from './schema/';
import { Schema } from './schema/Schema';


export class DataMapper implements IDataMapper {
  private readonly client: DynamoDBClient;
  private readonly translateConfig?: marshallOptions;

  private constructor(config: DataMapperConfig) {
    this.client = config.client;
    this.translateConfig = config.translateConfig;
  }

  static from(client: DynamoDBClient, translateConfig?: marshallOptions): DataMapper {
    return new DataMapper({ client, translateConfig });
  }


  async put<T extends object>(item: T, criteria?: Omit<Partial<PutItemCommandInput>, 'TableName' | 'Item'>, httpOptions?: HttpHandlerOptions): Promise<T> {
    const schema = getSchema(item);
    const tableName = getTableName(item);

    const command = new PutItemCommand({
      TableName: tableName,
      Item: DataMarshaller.marshall(item, schema, this.translateConfig),
      ...criteria,
    });

    await this.client.send(command, httpOptions);
    return item;
  }

  async get<T extends object>(key: Partial<T>, modelCtor: new () => T, httpOptions?: HttpHandlerOptions): Promise<T | undefined> {
    const schema = getSchema(modelCtor);
    const tableName = getTableName(modelCtor);

    const command = new GetItemCommand({
      TableName: tableName,
      Key: DataMarshaller.marshallKey(key, schema, this.translateConfig),
    });
    
    const output = await this.client.send(command, httpOptions);
    return output.Item ? DataMarshaller.unmarshall(output.Item, schema, modelCtor) : undefined;
  }

  async delete<T extends object>(key: Partial<T>, modelCtor: new () => T, deleteOptions?: Omit<Partial<DeleteItemCommandInput>, 'TableName' | 'Key'>, httpOptions?: HttpHandlerOptions): Promise<T> {
      throw new Error('Scan operation is not implemented yet.');
  }

  async *query<T extends object>(modelCtor: new () => T, criteria?: Omit<QueryCommandInput, 'TableName'>, httpOptions?: HttpHandlerOptions): AsyncIterable<T> {
      throw new Error('Scan operation is not implemented yet.');
  }

  async *scan<T extends object>(modelCtor: new () => T, criteria?: Omit<ScanCommandInput, 'TableName'>, httpOptions?: HttpHandlerOptions): AsyncIterable<T> {
    throw new Error('Scan operation is not implemented yet.');
  }
}