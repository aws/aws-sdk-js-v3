/**
 * <p>The amount of data scanned during the query execution and the amount of time that it took to execute, and the type of statement that was run.</p>
 */
export interface _QueryExecutionStatistics {
  /**
   * <p>The number of milliseconds that the query took to execute.</p>
   */
  EngineExecutionTimeInMillis?: number;

  /**
   * <p>The number of bytes in the data that was queried.</p>
   */
  DataScannedInBytes?: number;
}

export type _UnmarshalledQueryExecutionStatistics = _QueryExecutionStatistics;
