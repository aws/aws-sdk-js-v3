/**
 * <p>Aggregated request sampling data for a sampling rule across all services for a 10 second window.</p>
 */
export interface _SamplingStatisticSummary {
  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * <p>The start time of the reporting window.</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount?: number;

  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;

  /**
   * <p>The number of requests recorded.</p>
   */
  SampledCount?: number;
}

export interface _UnmarshalledSamplingStatisticSummary
  extends _SamplingStatisticSummary {
  /**
   * <p>The start time of the reporting window.</p>
   */
  Timestamp?: Date;
}
