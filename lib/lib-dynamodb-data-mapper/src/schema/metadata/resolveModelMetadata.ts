import { ItemSchema } from "../item";
import { getSchema, getTableName } from "../symbols";
import { TableNameOverride } from "../tableNameOverride";

/**
 * Resolves both schema and table name metadata from a decorated model class.
 *
 * If a {@link TableNameOverride} is provided, it will be used to compute the table name;
 * otherwise, the table name is resolved via the class prototype's static symbol.
 *
 * @param ctor - The model class constructor.
 * @param override - Optional {@link TableNameOverride} strategy.
 * @returns An object containing `schema` and `tableName`.
 *
 * @throws If metadata is missing or invalid.
 *
 * @example
 * ```ts
 * const { schema, tableName } = resolveModelMetadata(User, TableNameOverride.withConfig({ prefix: "dev_" }));
 * ```
 */
export function resolveModelMetadata(
  ctor: Function,
  override?: TableNameOverride
): { schema: ItemSchema; tableName: string } {
  const proto = ctor.prototype;
  const schema = getSchema(proto);
  const tableName = override ? override.tableName(ctor) : getTableName(proto);
  return { schema, tableName };
}
