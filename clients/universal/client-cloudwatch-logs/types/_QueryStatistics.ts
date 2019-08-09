/**
 * <p>Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned.</p>
 */
export interface _QueryStatistics {
  /**
   * <p>The number of log events that matched the query string.</p>
   */
  recordsMatched?: number;

  /**
   * <p>The total number of log events scanned during the query.</p>
   */
  recordsScanned?: number;

  /**
   * <p>The total number of bytes in the log events scanned during the query.</p>
   */
  bytesScanned?: number;
}

export type _UnmarshalledQueryStatistics = _QueryStatistics;
