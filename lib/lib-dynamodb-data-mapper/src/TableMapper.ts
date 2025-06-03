import type { DeleteItemCommandInput, PutItemCommandInput } from "@aws-sdk/client-dynamodb";
import type { HttpHandlerOptions } from "@smithy/types";

import { DataMapper } from "./DataMapper";
import { ModelConstructor } from "./schema";

/**
 * Table-bound DataMapper wrapper.
 *
 * Binds a specific model (with schema metadata) and a factory function
 * to enable DX-friendly, concise calls for a single table.
 *
 * @template D The raw schema-defined data shape (used for storage).
 * @template T The domain model or return shape (constructed via factory).
 */
export class TableMapper<D extends object, T> {
  constructor(
    private readonly mapper: DataMapper,
    private readonly modelCtor: ModelConstructor<D>,
    private readonly factory: (data: D) => T
  ) {}

  /**
   * Factory method for constructing a TableMapper.
   */
  static from<D extends object, T>(
    modelCtor: ModelConstructor<D>,
    factory: (data: D) => T,
    mapper: DataMapper
  ): TableMapper<D, T> {
    return new TableMapper(mapper, modelCtor, factory);
  }

  /**
   * Retrieves a single item by key and hydrates it using the bound factory.
   */
  async get(key: Partial<D>, httpOptions?: HttpHandlerOptions): Promise<T | undefined> {
    return this.mapper.get(key, this.factory, this.modelCtor, httpOptions);
  }

  /**
   * Saves a raw data item to the table.
   */
  async put(
    item: D,
    options?: Omit<Partial<PutItemCommandInput>, "TableName" | "Item">,
    httpOptions?: HttpHandlerOptions
  ): Promise<D> {
    return this.mapper.put(item, options, httpOptions);
  }

  /**
   * Deletes an item by key from the table.
   *
   * @throws Not yet implemented in the underlying DataMapper.
   */
  async delete(
    key: Partial<D>,
    options?: Omit<Partial<DeleteItemCommandInput>, "TableName" | "Key">,
    httpOptions?: HttpHandlerOptions
  ): Promise<D> {
    throw new Error("delete() not implemented yet.");
  }
}
