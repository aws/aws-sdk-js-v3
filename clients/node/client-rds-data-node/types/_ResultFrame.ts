import { _Record, _UnmarshalledRecord } from "./_Record";
import {
  _ResultSetMetadata,
  _UnmarshalledResultSetMetadata
} from "./_ResultSetMetadata";

/**
 * <p>The result set returned by a SQL statement.</p>
 */
export interface _ResultFrame {
  /**
   * <p>The records in the result set.</p>
   */
  records?: Array<_Record> | Iterable<_Record>;

  /**
   * <p>The result-set metadata in the result set.</p>
   */
  resultSetMetadata?: _ResultSetMetadata;
}

export interface _UnmarshalledResultFrame extends _ResultFrame {
  /**
   * <p>The records in the result set.</p>
   */
  records?: Array<_UnmarshalledRecord>;

  /**
   * <p>The result-set metadata in the result set.</p>
   */
  resultSetMetadata?: _UnmarshalledResultSetMetadata;
}
