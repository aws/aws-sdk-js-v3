import { _ResultFrame, _UnmarshalledResultFrame } from "./_ResultFrame";

/**
 * <p>The result of a SQL statement.</p>
 */
export interface _SqlStatementResult {
  /**
   * <p>The number of records updated by a SQL statement.</p>
   */
  numberOfRecordsUpdated?: number;

  /**
   * <p>The result set of the SQL statement.</p>
   */
  resultFrame?: _ResultFrame;
}

export interface _UnmarshalledSqlStatementResult extends _SqlStatementResult {
  /**
   * <p>The result set of the SQL statement.</p>
   */
  resultFrame?: _UnmarshalledResultFrame;
}
