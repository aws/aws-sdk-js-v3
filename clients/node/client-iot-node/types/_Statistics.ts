/**
 * <p>A map of key-value pairs for all supported statistics. Currently, only count is supported.</p>
 */
export interface _Statistics {
  /**
   * <p>The count of things that match the query.</p>
   */
  count?: number;
}

export type _UnmarshalledStatistics = _Statistics;
