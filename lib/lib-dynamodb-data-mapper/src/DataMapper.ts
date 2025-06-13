import {
  AttributeValue,
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { marshallOptions } from "@aws-sdk/util-dynamodb";
import { marshall as awsMarshall, unmarshall as awsUnmarshall } from "@aws-sdk/util-dynamodb";
import { HttpHandlerOptions } from "@smithy/types";

import { DataMarshaller } from "./marshaller";
import { getSchema, getTableName, ItemSchema } from "./schema";
import { DefaultTableNameResolver, TableNameResolver } from "./schema";

/**
 * Configuration for binding a specific table and model type.
 *
 * @typeParam D - The raw DynamoDB document structure.
 * @typeParam T - The application-level type that D is transformed into.
 *
 * @remarks
 * This interface defines how to map between the DynamoDB representation (`D`)
 * and the application-facing model (`T`). You may provide either:
 * - Transformer functions (`fromDocument` / `toDocument`)
 * - A class decorated with metadata (via `documentClass`)
 *
 * At least one mapping strategy must be defined.
 *
 * @public
 */
export interface TableBindingConfig<D, T = D> {
  tableName?: string;
  schema?: ItemSchema;
  fromDocument?: (doc: D) => T;
  toDocument?: (data: T) => D;
  documentClass?: Function;
}

/**
 * Configuration options for initializing a {@link DataMapper}.
 *
 * @public
 */
export interface DataMapperConfig {
  /**
   * The underlying DynamoDB client used to send requests.
   */
  client: DynamoDBClient;

  /**
   * Optional configuration for value marshalling/unmarshalling.
   * This is passed to the AWS marshall/unmarshall utilities.
   */
  translateConfig?: marshallOptions;

  /**
   * Optional table name resolver used to dynamically determine table names
   * based on the model class. If not provided, a {@link DefaultTableNameResolver}
   * will be used.
   *
   * @example
   * ```ts
   * const resolver = new DefaultTableNameResolver({ prefix: 'dev_' });
   * const mapper = DataMapper.from(User, {
   *   client,
   *   tableNameResolver: resolver,
   * });
   * ```
   */
  tableNameResolver?: TableNameResolver;
}

/**
 * A class that maps between typed application objects and DynamoDB document format.
 * Supports schema-aware transformation and class-based hydration.
 *
 * @typeParam D - The raw DynamoDB document format.
 * @typeParam T - The application-facing data type.
 *
 * @public
 */
export class DataMapper<D extends object, T = D> {
  private readonly client: DynamoDBClient;
  private readonly tableName: string | undefined;
  private readonly schema: ItemSchema | undefined;
  private readonly fromDocument: (document: D) => T;
  private readonly toDocument: (data: T) => D;
  private readonly documentClass?: Function;
  private readonly translateConfig?: marshallOptions;
  private readonly tableNameResolver: TableNameResolver;

  /**
   * Constructor is private to enforce usage of factory methods like `forModel()`.
   */
  private constructor(config: DataMapperConfig, binding: TableBindingConfig<D, T>) {
    const pass = (x: any) => x;
    this.fromDocument = binding.fromDocument ?? pass;
    this.toDocument = binding.toDocument ?? pass;
    this.client = config.client;
    this.translateConfig = config.translateConfig;
    this.schema = binding.schema;
    if (!this.schema && binding.documentClass) {
      try {
        this.schema = getSchema(binding.documentClass);
      } catch {
        this.schema = undefined; // fall back to schema-less mode
      }
    }

    this.tableNameResolver = config.tableNameResolver ?? new DefaultTableNameResolver();
    this.tableName = binding.tableName;
    if (!this.tableName && binding.documentClass) {
      try {
        this.tableName = this.tableNameResolver.resolve(binding.documentClass);
      } catch {
        this.tableName = binding.documentClass.name; // fall back to schema-less mode
      }
    }

    if (!this.tableName) {
      throw new Error("Failed to resolve table name: none provided, and no documentClass fallback available.");
    }
  }

  /**
   * Creates a new {@link DataMapper} instance for a given model class.
   * Automatically sets up basic object mapping and hydration.
   *
   * @param model - The class constructor used to hydrate data.
   * @param config - Table and client configuration.
   */
  static from<D extends object, T extends D>(
    model: new () => T,
    config: DataMapperConfig & TableBindingConfig<D, T>
  ): DataMapper<D, T> {
    return new DataMapper<D, T>(config, {
      tableName: config.tableName,
      schema: config.schema,
      documentClass: model,
      fromDocument: (doc) => Object.assign(new model(), doc),
      toDocument: (data) => ({ ...data }),
    });
  }

  /**
   * Persists a typed item to DynamoDB.
   * Converts the item to a DynamoDB-compatible document and applies optional write conditions.
   *
   * @param item - The item to write.
   * @param conditions - Optional write-time options (e.g. ReturnValues, ConditionExpression).
   * @param options - Optional HTTP handler config.
   * @returns The item returned from DynamoDB, or the input item if no attributes returned.
   */
  async put(
    item: T,
    conditions?: Omit<Partial<PutItemCommandInput>, "TableName" | "Item">,
    options?: HttpHandlerOptions
  ): Promise<T> {
    const marshalled = this.marshallInput(this.toDocument(item));

    const input: PutItemCommandInput = {
      TableName: this.tableName,
      Item: marshalled,
      ...conditions,
    };

    const result: PutItemCommandOutput = await this.client.send(new PutItemCommand(input), options);
    if (!result.Attributes) return item;
    const plain = this.unmarshallOutput(result.Attributes);
    return this.fromDocument(plain as D);
  }

  /**
   * Retrieves an item from DynamoDB using the specified key.
   * Converts the DynamoDB document into a typed object.
   *
   * @param key - The key of the item to retrieve.
   * @returns The hydrated object or undefined if not found.
   */
  async get(key: Partial<D>, options?: HttpHandlerOptions): Promise<T | undefined> {
    const input: GetItemCommandInput = {
      TableName: this.tableName,
      Key: this.marshallKey(key),
    };
    const result: GetItemCommandOutput = await this.client.send(new GetItemCommand(input), options);
    if (!result.Item) return undefined;
    const plain = this.unmarshallOutput(result.Item);
    return this.fromDocument(plain as D);
  }

  /**
   * Deletes an item by key (not implemented).
   */
  async delete(): Promise<void> {
    throw new Error("delete() is not implemented.");
  }

  /**
   * Queries the table for matching items (not implemented).
   */
  async *query(): AsyncIterable<T> {
    throw new Error("query() is not implemented.");
  }

  /**
   * Scans the table for all items (not implemented).
   */
  async *scan(): AsyncIterable<T> {
    throw new Error("scan() is not implemented.");
  }

  private marshallInput(input: D): Record<string, any> {
    return this.schema
      ? DataMarshaller.marshall(input, this.schema, this.translateConfig)
      : awsMarshall(input, this.translateConfig);
  }

  private marshallKey(key: Partial<D>): Record<string, any> {
    return this.schema
      ? DataMarshaller.marshallKey(key, this.schema, this.translateConfig)
      : awsMarshall(key, this.translateConfig);
  }

  private unmarshallOutput(item: Record<string, any>): D {
    return this.schema ? (DataMarshaller.unmarshallObject(item, this.schema) as D) : (awsUnmarshall(item) as D);
  }
}
