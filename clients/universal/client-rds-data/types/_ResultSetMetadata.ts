import {
  _ColumnMetadata,
  _UnmarshalledColumnMetadata
} from "./_ColumnMetadata";

/**
 * <p>The metadata of the result set returned by a SQL statement.</p>
 */
export interface _ResultSetMetadata {
  /**
   * <p>The number of columns in the result set.</p>
   */
  columnCount?: number;

  /**
   * <p>The metadata of the columns in the result set.</p>
   */
  columnMetadata?: Array<_ColumnMetadata> | Iterable<_ColumnMetadata>;
}

export interface _UnmarshalledResultSetMetadata extends _ResultSetMetadata {
  /**
   * <p>The metadata of the columns in the result set.</p>
   */
  columnMetadata?: Array<_UnmarshalledColumnMetadata>;
}
