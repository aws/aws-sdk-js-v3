/**
 * <p>Contains the metadata for a column.</p>
 */
export interface _ColumnMetadata {
  /**
   * <p>The type of the column.</p>
   */
  arrayBaseColumnType?: number;

  /**
   * <p>A value that indicates whether the column increments automatically.</p>
   */
  isAutoIncrement?: boolean;

  /**
   * <p>A value that indicates whether the column is case-sensitive.</p>
   */
  isCaseSensitive?: boolean;

  /**
   * <p>A value that indicates whether the column contains currency values.</p>
   */
  isCurrency?: boolean;

  /**
   * <p>A value that indicates whether an integer column is signed.</p>
   */
  isSigned?: boolean;

  /**
   * <p>The label for the column.</p>
   */
  label?: string;

  /**
   * <p>The name of the column.</p>
   */
  name?: string;

  /**
   * <p>A value that indicates whether the column is nullable.</p>
   */
  nullable?: number;

  /**
   * <p>The precision value of a decimal number column.</p>
   */
  precision?: number;

  /**
   * <p>The scale value of a decimal number column.</p>
   */
  scale?: number;

  /**
   * <p>The name of the schema that owns the table that includes the column.</p>
   */
  schemaName?: string;

  /**
   * <p>The name of the table that includes the column.</p>
   */
  tableName?: string;

  /**
   * <p>The type of the column.</p>
   */
  type?: number;

  /**
   * <p>The database-specific data type of the column.</p>
   */
  typeName?: string;
}

export type _UnmarshalledColumnMetadata = _ColumnMetadata;
