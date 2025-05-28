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

import { DataMarshaller } from './marshaller/DataMarshaller';
import { getSchema } from './schema/';
import { getTableName } from './schema/';

/**
 * Configuration options for initializing a {@link DataMapper}.
 *
 * @public
 */
export interface DataMapperConfig {
  /**
   * The underlying DynamoDB client instance used to execute operations.
   */
  client: DynamoDBClient;

  /**
   * Optional configuration for customizing how data is marshalled into
   * DynamoDB AttributeValue format.
   *
   * See {@link marshallOptions} for supported options such as:
   * - `convertEmptyValues`: Convert empty strings, blobs, and sets to `null`
   * - `removeUndefinedValues`: Exclude undefined values from the marshalled output
   */
  translateConfig?: marshallOptions;
}

/**
 * @public
 * Interface for a schema-aware DataMapper supporting both low-level and high-level operations.
 *
 * High-level methods operate on domain objects with schema metadata (via decorators or static symbols).
 * Low-level methods accept raw AWS SDK command inputs for advanced use cases.
 */
export class DataMapper {
  /**
   * Creates a new DataMapper instance.
   *
   * @param client - The DynamoDB client to use for executing operations.
   * @param translateConfig - Optional configuration for marshalling data.
   */
  private constructor(
    private readonly client: DynamoDBClient,
    private readonly translateConfig?: marshallOptions
  ) {}

  /**
   * Factory method to create a new DataMapper instance.
   *
   * @param client - The DynamoDB client to use for executing operations.
   * @param translateConfig - Optional configuration for marshalling data.
   * @returns A new DataMapper instance.
   */
  public static from(client: DynamoDBClient, translateConfig?: marshallOptions): DataMapper {
    return new DataMapper(client, translateConfig);
  }

  /**
   * Save a domain model object to DynamoDB using its schema metadata.
   *
   * @param item - The model instance with schema/table metadata.
   * @param criteria - Optional conditions to apply to the put operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns The saved item.
   */
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

  /**
   * Retrieve and hydrate a domain object using schema metadata.
   *
   * @param key - The primary key of the item.
   * @param modelCtor - The model class constructor.
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns A hydrated instance of the model.
   */
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

  /**
   * Delete a domain object by key using schema metadata.
   *
   * @param key - The key of the item to delete.
   * @param modelCtor - The model class constructor.
   * @param criteria - Optional conditions to apply to the delete operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns The deleted item, if it existed.
   */
  async delete<T extends object>(key: Partial<T>, modelCtor: new () => T, deleteOptions?: Omit<Partial<DeleteItemCommandInput>, 'TableName' | 'Key'>, httpOptions?: HttpHandlerOptions): Promise<T> {
      throw new Error('Delete operation is not implemented yet.');
  }

  /**
   * Query domain objects using a model constructor and key conditions.
   *
   * @param modelCtor - The model class constructor.
   * @param criteria - Conditions to apply to the query operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns An async iterable of hydrated model instances.
   */
  async *query<T extends object>(modelCtor: new () => T, criteria?: Omit<QueryCommandInput, 'TableName'>, httpOptions?: HttpHandlerOptions): AsyncIterable<T> {
      throw new Error('Query operation is not implemented yet.');
  }

  /**
   * Scan a table using schema metadata and return hydrated objects.
   *
   * @param modelCtor - The model class constructor.
   * @param criteria - Conditions to apply to the scan operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns An async iterable of hydrated model instances.
   */
  async *scan<T extends object>(modelCtor: new () => T, criteria?: Omit<ScanCommandInput, 'TableName'>, httpOptions?: HttpHandlerOptions): AsyncIterable<T> {
    throw new Error('Scan operation is not implemented yet.');
  }
}