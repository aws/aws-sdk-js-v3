import { getTableName } from "./symbols";

/**
 * Interface for overriding or dynamically computing a table name
 * based on a given model class. Mirrors AWS SDK Java's TableNameOverride.
 */
export interface TableNameOverride {
  /**
   * Returns the resolved table name for the given model class.
   *
   * @param modelClass - The model class (constructor function) to resolve the table name for
   * @returns The resolved DynamoDB table name
   */
  tableName(modelClass: Function): string;
}

/**
 * Configuration options for environment-aware table naming.
 * Allows prefixing, suffixing with environment, and per-model overrides.
 */
export interface TableNameOverrideConfig {
  /**
   * A string to prefix all resolved table names with (e.g., 'dev_', 'staging_').
   */
  prefix?: string;

  /**
   * A string environment tag to append to table names (e.g., 'v1', 'prod').
   * Applied after prefix and base name.
   */
  env?: string;

  /**
   * A map of model class names to explicit table names.
   * Takes precedence over default name resolution.
   */
  overrides?: Record<string, string>;
}

/**
 * Java-aligned implementation of TableNameOverride.
 * Supports dynamic naming based on prefix, environment, and per-model overrides.
 */
export class ConfigurableTableNameOverride implements TableNameOverride {
  private constructor(private config: TableNameOverrideConfig = {}) {}

  /**
   * Creates a new TableNameOverride using an environment-aware configuration object.
   * Mirrors your original withConfig() pattern, but named to align more cleanly with Java-style builders.
   *
   * @param config - Configuration object including optional prefix, env, and overrides.
   * @returns A new ConfigurableTableNameOverride instance
   */
  static withConfig(config: TableNameOverrideConfig = {}): TableNameOverride {
    return new ConfigurableTableNameOverride(config);
  }

  /**
   * Resolves the table name for the given model class by applying:
   * 1. An explicit override from the config (if available)
   * 2. The value from the DynamoDbTable symbol (via getTableName), or fallback to class name
   * 3. A prefix and/or environment suffix from the config
   *
   * @param modelClass - The class constructor whose table name will be resolved
   * @returns The final resolved DynamoDB table name
   */
  public tableName(modelClass: Function): string {
    const name = modelClass.name;

    // Return early if override is defined
    if (this.config.overrides?.[name]) {
      return this.config.overrides[name];
    }

    let baseName: string;
    try {
      baseName = getTableName(modelClass);
    } catch {
      baseName = name;
    }

    if (this.config.prefix) baseName = this.config.prefix + baseName;
    if (this.config.env) baseName += `_${this.config.env}`;

    return baseName;
  }

  /**
   * Creates a fixed table name override.
   * Mirrors Java's TableNameOverride.withTableName().
   *
   * @param name - The table name to always return
   * @returns A TableNameOverride instance
   */
  static withTableName(name: string): TableNameOverride {
    return {
      tableName: () => name,
    };
  }

  /**
   * Alias for withTableName(name). Matches Java's TableNameOverride.override(name).
   *
   * @param name - The fixed table name to return.
   * @returns A TableNameOverride that always returns the given name.
   */
  static override(name: string): TableNameOverride {
    return ConfigurableTableNameOverride.withTableName(name);
  }

  /**
   * Creates a supplier-based table name override.
   * Mirrors Java's TableNameOverride.withTableNameSupplier().
   *
   * @param supplier - A function that dynamically returns a table name
   * @returns A TableNameOverride instance
   */
  static withSupplier(supplier: () => string): TableNameOverride {
    return {
      tableName: () => supplier(),
    };
  }
}
