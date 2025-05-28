import type { Schema } from './schema';

/**
 * Symbol for defining table name metadata on a class.
 *
 * Can be:
 * - A method: `[DynamoDbTable](): string`
 * - A property: `[DynamoDbTable]: string`
 *
 * @example
 * ```ts
 * class FooDocument {
 *   [DynamoDbTable]() {
 *     return 'FooTable';
 *   }
 *
 *   [DynamoDbSchema]() {
 *     return {
 *       bar: { type: 'String' },
 *       baz: { type: 'Number' },
 *     };
 *   }
 * }
 * ```
 */
export const DynamoDbTable = Symbol.for('DynamoDbTableName');

export function getTableName(item: any, tableNamePrefix = ''): string {
  if (item) {
    const tableName = item[DynamoDbTable];
    if (typeof tableName === 'function') {
      return tableNamePrefix + tableName.call(item);
    }
    if (typeof tableName === 'string') {
      return tableNamePrefix + tableName;
    }
  }

  throw new Error(
    'The provided item did not adhere to the DynamoDbTable protocol. ' +
    'No string or function was found at the `DynamoDbTable` symbol.'
  );
}

/**
 * Symbol for defining schema metadata on a class.
 *
 * Can be used as:
 * - A method: `[DynamoDbSchema](): Schema`
 * - A property: `[DynamoDbSchema]: Schema`
 *
 * @example
 * ```ts
 * class FooDocument {
 *   [DynamoDbSchema]() {
 *     return {
 *       bar: { type: 'String' },
 *       baz: { type: 'Number' },
 *     };
 *   }
 * }
 * ```
 */
export const DynamoDbSchema = Symbol.for('DynamoDbSchema');

export function getSchema(item: any): Schema {
  if (item) {
    const schema = item[DynamoDbSchema];
    if (typeof schema === 'function') {
      return schema.call(item);
    }
    if (typeof schema === 'object') {
      return schema;
    }
  }

  throw new Error(
    'The provided item did not adhere to the DynamoDbSchema protocol. ' +
    'No function or object was found at the `DynamoDbSchema` symbol.'
  );
}