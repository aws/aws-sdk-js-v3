/**
 * <p>Information about requests that failed with a 5xx Server Error status code.</p>
 */
export interface _FaultStatistics {
  /**
   * <p>The number of requests that failed with untracked 5xx Server Error status codes.</p>
   */
  OtherCount?: number;

  /**
   * <p>The total number of requests that failed with a 5xx Server Error status code.</p>
   */
  TotalCount?: number;
}

export type _UnmarshalledFaultStatistics = _FaultStatistics;
