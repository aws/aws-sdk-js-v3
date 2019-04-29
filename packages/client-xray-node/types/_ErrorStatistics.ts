/**
 * <p>Information about requests that failed with a 4xx Client Error status code.</p>
 */
export interface _ErrorStatistics {
  /**
   * <p>The number of requests that failed with a 419 throttling status code.</p>
   */
  ThrottleCount?: number;

  /**
   * <p>The number of requests that failed with untracked 4xx Client Error status codes.</p>
   */
  OtherCount?: number;

  /**
   * <p>The total number of requests that failed with a 4xx Client Error status code.</p>
   */
  TotalCount?: number;
}

export type _UnmarshalledErrorStatistics = _ErrorStatistics;
