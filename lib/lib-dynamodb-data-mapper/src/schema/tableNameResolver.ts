import { DynamoDbTable, getTableName } from "../schema";

/**
 * Interface for resolving the DynamoDB table name associated with a model class.
 * Allows mapping class constructors to actual DynamoDB table names at runtime.
 */
export interface TableNameResolver {
  /**
   * Resolves the table name to use for the given model class.
   * @param modelClass - The constructor function of the model class
   * @returns A string representing the resolved DynamoDB table name
   */
  resolve(modelClass: Function): string;
}

/**
 * Optional configuration for the DefaultTableNameResolver.
 * Supports prefixing, environment suffixes, and per-model overrides.
 */
export interface TableNameResolverConfig {
  /** A string to prefix all resolved table names with (e.g., 'dev_', 'staging_') */
  prefix?: string;

  /**
   * A string environment tag to append to table names (e.g., 'prod', 'test').
   * Applied after prefix and base name.
   */
  env?: string;

  /**
   * A map of model class names to explicit table names.
   * This takes precedence over prefix and env resolution.
   */
  overrides?: Record<string, string>;
}

/**
 * Default implementation of the TableNameResolver interface.
 * Resolves table names using optional prefix, environment, and model overrides.
 */
export class DefaultTableNameResolver implements TableNameResolver {
  constructor(private config: TableNameResolverConfig = {}) {}

  /**
   * Resolves the table name for the provided model class.
   * Falls back to class name or static DynamoDbTable symbol if available.
   * Applies overrides, prefix, and env in that order.
   *
   * @param modelClass - The constructor of the model to resolve
   * @returns The final resolved DynamoDB table name
   */
  resolve(modelClass: Function): string {
    const name = modelClass.name;

    // 1. Check explicit override
    if (this.config.overrides?.[name]) {
      return this.config.overrides[name];
    }

    // 2. Use symbol or fallback to class name
    let baseName: string;
    try {
      baseName = getTableName(modelClass);
    } catch {
      baseName = modelClass.name;
    }

    // 3. Apply prefix or environment tagging
    let resolved = baseName;
    if (this.config.prefix) resolved = this.config.prefix + resolved;
    if (this.config.env) resolved += `_${this.config.env}`;

    return resolved;
  }
}
