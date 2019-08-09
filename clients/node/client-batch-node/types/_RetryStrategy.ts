/**
 * <p>The retry strategy associated with a job.</p>
 */
export interface _RetryStrategy {
  /**
   * <p>The number of times to move a job to the <code>RUNNABLE</code> status. You may specify between 1 and 10 attempts. If the value of <code>attempts</code> is greater than one, the job is retried on failure the same number of attempts as the value.</p>
   */
  attempts?: number;
}

export type _UnmarshalledRetryStrategy = _RetryStrategy;
