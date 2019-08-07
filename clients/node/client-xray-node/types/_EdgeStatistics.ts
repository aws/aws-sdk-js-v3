import {
  _ErrorStatistics,
  _UnmarshalledErrorStatistics
} from "./_ErrorStatistics";
import {
  _FaultStatistics,
  _UnmarshalledFaultStatistics
} from "./_FaultStatistics";

/**
 * <p>Response statistics for an edge.</p>
 */
export interface _EdgeStatistics {
  /**
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   */
  OkCount?: number;

  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: _ErrorStatistics;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: _FaultStatistics;

  /**
   * <p>The total number of completed requests.</p>
   */
  TotalCount?: number;

  /**
   * <p>The aggregate response time of completed requests.</p>
   */
  TotalResponseTime?: number;
}

export interface _UnmarshalledEdgeStatistics extends _EdgeStatistics {
  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: _UnmarshalledErrorStatistics;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: _UnmarshalledFaultStatistics;
}
