/**
 * <p>Information about the columns in a query execution result.</p>
 */
export interface _ColumnInfo {
  /**
   * <p>The catalog to which the query results belong.</p>
   */
  CatalogName?: string;

  /**
   * <p>The schema name (database name) to which the query results belong.</p>
   */
  SchemaName?: string;

  /**
   * <p>The table name for the query results.</p>
   */
  TableName?: string;

  /**
   * <p>The name of the column.</p>
   */
  Name: string;

  /**
   * <p>A column label.</p>
   */
  Label?: string;

  /**
   * <p>The data type of the column.</p>
   */
  Type: string;

  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits, up to 38. For performance reasons, we recommend up to 18 digits.</p>
   */
  Precision?: number;

  /**
   * <p>For <code>DECIMAL</code> data types, specifies the total number of digits in the fractional part of the value. Defaults to 0.</p>
   */
  Scale?: number;

  /**
   * <p>Indicates the column's nullable status.</p>
   */
  Nullable?: "NOT_NULL" | "NULLABLE" | "UNKNOWN" | string;

  /**
   * <p>Indicates whether values in the column are case-sensitive.</p>
   */
  CaseSensitive?: boolean;
}

export type _UnmarshalledColumnInfo = _ColumnInfo;
