/**
 * _FindingStatistics shape
 */
export interface _FindingStatistics {
  /**
   * <p>Represents a map of severity to count statistic for a set of findings</p>
   */
  CountBySeverity?: { [key: string]: number } | Iterable<[string, number]>;
}

export interface _UnmarshalledFindingStatistics extends _FindingStatistics {
  /**
   * <p>Represents a map of severity to count statistic for a set of findings</p>
   */
  CountBySeverity?: { [key: string]: number };
}
