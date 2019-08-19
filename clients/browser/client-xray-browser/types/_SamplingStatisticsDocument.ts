/**
 * <p>Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a>GetSamplingTargets</a>.</p>
 */
export interface _SamplingStatisticsDocument {
  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName: string;

  /**
   * <p>A unique identifier for the service in hexadecimal.</p>
   */
  ClientID: string;

  /**
   * <p>The current time.</p>
   */
  Timestamp: Date | string | number;

  /**
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount: number;

  /**
   * <p>The number of requests recorded.</p>
   */
  SampledCount: number;

  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;
}

export interface _UnmarshalledSamplingStatisticsDocument
  extends _SamplingStatisticsDocument {
  /**
   * <p>The current time.</p>
   */
  Timestamp: Date;
}
