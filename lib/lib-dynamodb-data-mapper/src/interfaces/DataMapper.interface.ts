import { DeleteItemCommandInput, DynamoDBClient, PutItemCommandInput, QueryCommandInput, ScanCommandInput } from '@aws-sdk/client-dynamodb/';
import { HttpHandlerOptions } from '@aws-sdk/types';
import { marshallOptions } from '@aws-sdk/util-dynamodb';

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
export interface IDataMapper {
  /**
   * Save a domain model object to DynamoDB using its schema metadata.
   *
   * @param item - The model instance with schema/table metadata.
   * @param criteria - Optional conditions to apply to the put operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns The saved item.
   */
  put<T extends object>(
    item: T, 
    criteria?: Omit<Partial<PutItemCommandInput>, 'TableName' | 'Item'>,
    options?: HttpHandlerOptions,
  ): Promise<T>;

  /**
   * Retrieve and hydrate a domain object using schema metadata.
   *
   * @param key - The primary key of the item.
   * @param modelCtor - The model class constructor.
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns A hydrated instance of the model.
   */
  get<T extends object>(
    key: Partial<T>,
    modelCtor: new () => T,
    options?: HttpHandlerOptions
  ): Promise<T | undefined>;

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
  delete<T extends object>(
    key: Partial<T>,
    modelCtor: new () => T,
    criteria?: Omit<Partial<DeleteItemCommandInput>, 'TableName' | 'Key'>,
    options?: HttpHandlerOptions
  ): Promise<T>;

  /**
   * Query domain objects using a model constructor and key conditions.
   *
   * @param modelCtor - The model class constructor.
   * @param criteria - Conditions to apply to the query operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns An async iterable of hydrated model instances.
   */
  query<T extends object>(
    modelCtor: new () => T,
    criteria?: Omit<QueryCommandInput, 'TableName'>,
    options?: HttpHandlerOptions
  ): AsyncIterable<T>;

  /**
   * Scan a table using schema metadata and return hydrated objects.
   *
   * @param modelCtor - The model class constructor.
   * @param criteria - Conditions to apply to the scan operation (excluding TableName).
   * @param options - Optional HTTP handler options.
   * (e.g., timeouts, retries, abort signals). See {@link HttpHandlerOptions}.
   * @returns An async iterable of hydrated model instances.
   */
  scan<T extends object>(
    modelCtor: new () => T,
    criteria?: Omit<ScanCommandInput, 'TableName'>,
    options?: HttpHandlerOptions
  ): AsyncIterable<T>;
}