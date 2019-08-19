import { _ColumnInfo, _UnmarshalledColumnInfo } from "./_ColumnInfo";

/**
 * <p>The metadata that describes the column structure and data types of a table of query results. </p>
 */
export interface _ResultSetMetadata {
  /**
   * <p>Information about the columns returned in a query result metadata.</p>
   */
  ColumnInfo?: Array<_ColumnInfo> | Iterable<_ColumnInfo>;
}

export interface _UnmarshalledResultSetMetadata extends _ResultSetMetadata {
  /**
   * <p>Information about the columns returned in a query result metadata.</p>
   */
  ColumnInfo?: Array<_UnmarshalledColumnInfo>;
}
