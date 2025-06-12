import { DynamoDbTable } from "../symbols";

/**
 * Declare a TypeScript class to represent items in a table in a way that is
 * understandable by the AWS DynamoDB DataMapper for JavaScript. Meant to be
 * used as a TypeScript class decorator in projects compiled with the
 * `experimentalDecorators` option enabled.
 *
 * @see https://www.typescriptlang.org/docs/handbook/decorators.html
 * @see https://www.typescriptlang.org/docs/handbook/compiler-options.html
 */
export function table(tableName: string): ClassDecorator {
  return (constructor) => {
    constructor.prototype[DynamoDbTable] = tableName;
  };
}
