/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  type QueryCommandInput,
  type ScanCommandInput,
  DeleteItemCommandInput,
  DynamoDBClient,
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { marshallOptions } from "@aws-sdk/util-dynamodb";
import { HttpHandlerOptions } from "@smithy/types";

import { DataMarshaller } from "./marshaller/DataMarshaller";
import { getSchema, ModelConstructor, resolveMetadataFromCtor } from "./schema/";
import { getTableName } from "./schema/";
import { isPutCommandInput, PutCommandInput, PutCommandOutput } from "./commands/put";
import { GetCommandInput, isGetCommandInput } from "./commands";

/**
 * Configuration options for initializing a {@link DataMapper}.
 *
 * @public
 */
export interface DataMapperConfig {
  client: DynamoDBClient;
  translateConfig?: marshallOptions;
}

/**
 * @public
 * Schema-aware DataMapper for performing high-level object persistence operations.
 *
 * This class handles marshalling/unmarshalling domain models using declarative schema metadata.
 * It supports both constructor- and factory-based hydration patterns.
 */
export class DataMapper {
  private constructor(
    private readonly client: DynamoDBClient,
    private readonly translateConfig?: marshallOptions
  ) {}

  /**
   * Creates a new instance of the {@link DataMapper}.
   *
   * @param client - An initialized DynamoDB client
   * @param translateConfig - Optional marshalling behavior
   */
  static from(client: DynamoDBClient, translateConfig?: marshallOptions): DataMapper {
    return new DataMapper(client, translateConfig);
  }

  /**
   * Saves an item to DynamoDB. Supports both classic and command-style usage.
   */
  async put<T extends object>(
    item: T,
    conditions?: Omit<Partial<PutItemCommandInput>, "TableName" | "Item">,
    options?: HttpHandlerOptions
  ): Promise<T>;
  async put<T extends object>(input: PutCommandInput<T>): Promise<T>;
  async put<T extends object>(
    inputOrItem: T | PutCommandInput<T>,
    maybeConditions?: Omit<Partial<PutItemCommandInput>, "TableName" | "Item">,
    maybeOptions?: HttpHandlerOptions
  ): Promise<T> {
    const item = isPutCommandInput(inputOrItem) ? inputOrItem.item : inputOrItem;
    const conditions = isPutCommandInput(inputOrItem) ? inputOrItem.conditions : maybeConditions;
    const options = isPutCommandInput(inputOrItem) ? inputOrItem.options : maybeOptions;

    const schema = getSchema(item);
    const tableName = getTableName(item);

    const input: PutItemCommandInput = {
      TableName: tableName,
      Item: DataMarshaller.marshall(item, schema, this.translateConfig),
      ReturnValues: "ALL_NEW",
      ...conditions,
    };

    const result: PutItemCommandOutput = await this.client.send(new PutItemCommand(input), options);
    return result.Attributes
      ? DataMarshaller.unmarshall(result.Attributes, schema, item.constructor as new () => T)
      : item;
  }

  /**
   * Retrieves and hydrates an item from DynamoDB.
   * Supports both constructor and factory patterns.
   */
  async get<D extends object, T extends D>(
    key: Partial<D>,
    model: ModelConstructor<D>,
    options?: HttpHandlerOptions
  ): Promise<T | undefined>;
  async get<D extends object, T>(
    key: Partial<D>,
    factory: (data: D) => T,
    model: ModelConstructor<D>,
    options?: HttpHandlerOptions
  ): Promise<T | undefined>;
  async get<D extends object, T extends D>(input: GetCommandInput<D, T>): Promise<T | undefined>;
  async get<D extends object, T extends D>(
    arg1: Partial<D> | GetCommandInput<D,T>,
    arg2?: ((data: D) => T) | ModelConstructor<D>,
    arg3?: ModelConstructor<D> | HttpHandlerOptions,
    arg4?: HttpHandlerOptions
  ): Promise<T | undefined> {
    const { key, model, factory, options } = this.resolveGetArguments(arg1, arg2, arg3, arg4);

    const { schema, tableName } = resolveMetadataFromCtor(model);
    const input: GetItemCommandInput = {
      TableName: tableName,
      Key: DataMarshaller.marshallKey(key, schema, this.translateConfig),
    };

    const result: GetItemCommandOutput = await this.client.send(new GetItemCommand(input), options);
    if (!result.Item) return undefined;

    const plain = DataMarshaller.unmarshallObject(result.Item, schema);
    return factory ? factory(plain as D) : (Object.assign(new model(), plain) as T);
  }

  /**
   * Delete a domain object by key using schema metadata.
   */
  async delete<T extends object>(
    key: Partial<T>,
    modelCtor: new () => T,
    deleteOptions?: Omit<Partial<DeleteItemCommandInput>, "TableName" | "Key">,
    httpOptions?: HttpHandlerOptions
  ): Promise<T> {
    throw new Error("Delete operation is not implemented yet.");
  }

  /**
   * Query domain objects using a model constructor and key conditions.
   */
  async *query<T extends object>(
    modelCtor: new () => T,
    criteria?: Omit<QueryCommandInput, "TableName">,
    httpOptions?: HttpHandlerOptions
  ): AsyncIterable<T> {
    throw new Error("Query operation is not implemented yet.");
  }

  /**
   * Scan a table using schema metadata and return hydrated objects.
   */
  async *scan<T extends object>(
    modelCtor: new () => T,
    criteria?: Omit<ScanCommandInput, "TableName">,
    httpOptions?: HttpHandlerOptions
  ): AsyncIterable<T> {
    throw new Error("Scan operation is not implemented yet.");
  }

  private resolveGetArguments<D extends object, T extends D> (
    arg1: GetCommandInput<D, T>| Partial<D>,
    arg2?: ((data: D) => T) | ModelConstructor<D>,
    arg3?: ModelConstructor<D> | HttpHandlerOptions,
    arg4?: HttpHandlerOptions
  ): GetCommandInput<D, T> {
    let key: Partial<D>;
      let model: ModelConstructor<D>;
      let factory: ((data: D) => T) | undefined;
      let options: HttpHandlerOptions | undefined;

      if (isGetCommandInput(arg1)) {
        key = arg1.key;
        model = arg1.model;
        factory = arg1.factory;
        options = arg1.options;
      } else if (
        typeof arg2 === "function" &&
        typeof arg3 === "function"
      ) {
        key = arg1;
        factory = arg2 as (data: D) => T;
        model = arg3 as ModelConstructor<D>;
        options = arg4;
      } else {
        key = arg1;
        model = arg2 as ModelConstructor<D>;
        options = arg3 as HttpHandlerOptions;
      }
      return {key, model, factory, options};
  }
}
