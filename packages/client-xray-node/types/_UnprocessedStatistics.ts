/**
 * <p>Sampling statistics from a call to <a>GetSamplingTargets</a> that X-Ray could not process.</p>
 */
export interface _UnprocessedStatistics {
  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export type _UnmarshalledUnprocessedStatistics = _UnprocessedStatistics;
