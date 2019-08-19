import { _Row, _UnmarshalledRow } from "./_Row";
import {
  _ResultSetMetadata,
  _UnmarshalledResultSetMetadata
} from "./_ResultSetMetadata";

/**
 * <p>The metadata and rows that comprise a query result set. The metadata describes the column structure and data types.</p>
 */
export interface _ResultSet {
  /**
   * <p>The rows in the table.</p>
   */
  Rows?: Array<_Row> | Iterable<_Row>;

  /**
   * <p>The metadata that describes the column structure and data types of a table of query results.</p>
   */
  ResultSetMetadata?: _ResultSetMetadata;
}

export interface _UnmarshalledResultSet extends _ResultSet {
  /**
   * <p>The rows in the table.</p>
   */
  Rows?: Array<_UnmarshalledRow>;

  /**
   * <p>The metadata that describes the column structure and data types of a table of query results.</p>
   */
  ResultSetMetadata?: _UnmarshalledResultSetMetadata;
}
