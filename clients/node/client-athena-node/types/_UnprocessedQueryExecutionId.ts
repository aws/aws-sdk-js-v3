/**
 * <p>Describes a query execution that failed to process.</p>
 */
export interface _UnprocessedQueryExecutionId {
  /**
   * <p>The unique identifier of the query execution.</p>
   */
  QueryExecutionId?: string;

  /**
   * <p>The error code returned when the query execution failed to process, if applicable.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message returned when the query execution failed to process, if applicable.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledUnprocessedQueryExecutionId = _UnprocessedQueryExecutionId;
