import { ItemSchema } from "../item";
import { getSchema, getTableName } from "../symbols";

/**
 * A constructor type for the schema-defined raw data object (D).
 */
export type ModelConstructor<D> = new () => D;

/**
 * Resolves the schema and table name metadata from a model constructor.
 *
 * This function retrieves the schema definition and DynamoDB table name
 * attached to the model's prototype. It assumes metadata was assigned
 * using decorators or `Object.defineProperty()` with the `DynamoDbSchema`
 * and `DynamoDbTable` symbols.
 *
 * @param ctor - The constructor of the raw data model with schema metadata.
 * @returns An object containing the resolved `schema` and `tableName`.
 *
 * @throws If the schema or table name metadata is missing or invalid.
 *
 * @example
 * ```ts
 * class UserData {
 *   id!: string;
 *   name!: string;
 * }
 *
 * Object.defineProperty(UserData.prototype, DynamoDbSchema, { value: {...} });
 * Object.defineProperty(UserData.prototype, DynamoDbTable, { value: 'Users' });
 *
 * const { schema, tableName } = resolveMetadataFromCtor(UserData);
 * ```
 */
export function resolveMetadataFromCtor<D>(ctor: ModelConstructor<D>): { schema: ItemSchema; tableName: string } {
  const proto = ctor.prototype;
  const schema = getSchema(proto);
  const tableName = getTableName(proto);
  return { schema, tableName };
}
