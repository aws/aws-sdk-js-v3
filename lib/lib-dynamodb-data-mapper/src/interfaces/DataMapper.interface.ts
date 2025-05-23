import {
  DeleteCommandInput,
  DeleteCommandOutput,
  GetCommandInput,
  GetCommandOutput,
  PutCommandInput,
  PutCommandOutput,
  QueryCommandInput,
  QueryCommandOutput,
  ScanCommandInput,
  ScanCommandOutput,
} from "@aws-sdk/lib-dynamodb";
import { HttpHandlerOptions } from "@aws-sdk/types";

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
   * @param options - Optional HTTP handler options.
   * @returns The saved item.
   */
  put<T extends object>(item: T, options?: HttpHandlerOptions): Promise<T>;

  /**
   * Send a raw PutCommand to DynamoDB.
   *
   * @param input - A full PutCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  put(input: PutCommandInput, options?: HttpHandlerOptions): Promise<PutCommandOutput>;

  /**
   * Retrieve and hydrate a domain object using schema metadata.
   *
   * @param key - The primary key of the item.
   * @param modelCtor - The model class constructor.
   * @param options - Optional HTTP handler options.
   * @returns A hydrated instance of the model.
   */
  get<T extends object>(
    key: Partial<T>,
    modelCtor: new () => T,
    options?: HttpHandlerOptions
  ): Promise<T>;

  /**
   * Send a raw GetCommand to DynamoDB.
   *
   * @param input - A full GetCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  get(input: GetCommandInput, options?: HttpHandlerOptions): Promise<GetCommandOutput>;

  /**
   * Delete a domain object by key using schema metadata.
   *
   * @param key - The key of the item to delete.
   * @param modelCtor - The model class constructor.
   * @param options - Optional HTTP handler options.
   * @returns The deleted item, if it existed.
   */
  delete<T extends object>(
    key: Partial<T>,
    modelCtor: new () => T,
    options?: HttpHandlerOptions
  ): Promise<T>;

  /**
   * Send a raw DeleteCommand to DynamoDB.
   *
   * @param input - A full DeleteCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  delete(input: DeleteCommandInput, options?: HttpHandlerOptions): Promise<DeleteCommandOutput>;

  /**
   * Query domain objects using a model constructor and key conditions.
   *
   * @param modelCtor - The model class constructor.
   * @param options - Query options excluding TableName (inferred from metadata).
   * @returns An async iterable of hydrated model instances.
   */
  query<T extends object>(
    modelCtor: new () => T,
    options: Omit<QueryCommandInput, "TableName">
  ): AsyncIterable<T>;

  /**
   * Send a raw QueryCommand to DynamoDB.
   *
   * @param input - A full QueryCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  query(input: QueryCommandInput, options?: HttpHandlerOptions): Promise<QueryCommandOutput>;

  /**
   * Scan a table using schema metadata and return hydrated objects.
   *
   * @param modelCtor - The model class constructor.
   * @param options - Optional scan options (excluding TableName).
   * @returns An async iterable of hydrated model instances.
   */
  scan<T extends object>(
    modelCtor: new () => T,
    options?: Omit<ScanCommandInput, "TableName">
  ): AsyncIterable<T>;

  /**
   * Send a raw ScanCommand to DynamoDB.
   *
   * @param input - A full ScanCommandInput object.
   * @param options - Optional HTTP handler options.
   */
  scan(input: ScanCommandInput, options?: HttpHandlerOptions): Promise<ScanCommandOutput>;
}