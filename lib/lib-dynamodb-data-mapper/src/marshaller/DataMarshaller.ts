import type { AttributeValue } from "@aws-sdk/client-dynamodb";
import { marshallOptions } from "@aws-sdk/util-dynamodb";

import { ItemSchema } from "../schema";
import { marshallItem, marshallKey } from "./marshall";
import { unmarshallItem, unmarshallPlainObject } from "./unmarshall";

/**
 * Schema-aware marshalling and unmarshalling utilities.
 *
 * This class provides static methods to transform JavaScript objects
 * to and from DynamoDB AttributeValue format using schema definitions.
 */
export class DataMarshaller {
  /**
   * Marshalls an object into a DynamoDB-compatible Item.
   *
   * @param input - The input object.
   * @param schema - The schema used to guide marshalling.
   * @param options - Optional DynamoDB marshalling options.
   * @returns A marshalled DynamoDB Item.
   */
  static marshall<T extends object>(
    input: T,
    schema: ItemSchema,
    options: marshallOptions = {}
  ): Record<string, AttributeValue> {
    return marshallItem(schema, input, options);
  }

  /**
   * Marshalls only the key attributes of an object (partition and sort keys).
   *
   * @param input - The input object.
   * @param schema - The schema used to guide marshalling.
   * @param options - Optional DynamoDB marshalling options.
   * @param indexName - Optional index name for alternate keys.
   * @returns A marshalled DynamoDB key.
   */
  static marshallKey<T extends object>(
    input: T,
    schema: ItemSchema,
    options: marshallOptions = {},
    indexName?: string
  ): Record<string, AttributeValue> {
    return marshallKey(schema, input, indexName, options);
  }

  /**
   * Unmarshalls a DynamoDB item into a class-based model instance.
   *
   * @param item - The raw DynamoDB item.
   * @param schema - The schema to use for unmarshalling.
   * @param model - A class constructor for the output model.
   * @returns A hydrated instance of the model.
   */
  static unmarshall<T extends object>(item: Record<string, AttributeValue>, schema: ItemSchema, model: new () => T): T {
    return unmarshallItem(schema, item, model);
  }

  /**
   * Unmarshalls a DynamoDB item into a plain JavaScript object
   * using the provided schema. Used when constructing model instances
   * through factory functions rather than class constructors.
   *
   * @param item - The raw DynamoDB item.
   * @param schema - The schema to use for unmarshalling.
   * @returns A plain object containing unmarshalled values.
   */
  static unmarshallObject(item: Record<string, AttributeValue>, schema: ItemSchema): Record<string, any> {
    return unmarshallPlainObject(item, schema);
  }
}
