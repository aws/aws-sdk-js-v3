/**
 * <p>If this job failed, this element indicates why the job failed.</p>
 */
export interface _JobFailure {
  /**
   * <p>The failure code, if any, for the specified job.</p>
   */
  FailureCode?: string;

  /**
   * <p>The failure reason, if any, for the specified job.</p>
   */
  FailureReason?: string;
}

export type _UnmarshalledJobFailure = _JobFailure;
