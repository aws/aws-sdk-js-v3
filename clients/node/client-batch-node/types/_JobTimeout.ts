/**
 * <p>An object representing a job timeout configuration.</p>
 */
export interface _JobTimeout {
  /**
   * <p>The time duration in seconds (measured from the job attempt's <code>startedAt</code> timestamp) after which AWS Batch terminates your jobs if they have not finished.</p>
   */
  attemptDurationSeconds?: number;
}

export type _UnmarshalledJobTimeout = _JobTimeout;
