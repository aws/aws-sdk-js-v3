/**
 * <p>The retry strategy to use for failed jobs if the target is an AWS Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.</p>
 */
export interface _BatchRetryStrategy {
  /**
   * <p>The number of times to attempt to retry, if the job fails. Valid values are 1–10.</p>
   */
  Attempts?: number;
}

export type _UnmarshalledBatchRetryStrategy = _BatchRetryStrategy;
