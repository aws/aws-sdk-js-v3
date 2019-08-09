/**
 * <p>Records a successful request to stop a specified <code>JobRun</code>.</p>
 */
export interface _BatchStopJobRunSuccessfulSubmission {
  /**
   * <p>The name of the job definition used in the job run that was stopped.</p>
   */
  JobName?: string;

  /**
   * <p>The <code>JobRunId</code> of the job run that was stopped.</p>
   */
  JobRunId?: string;
}

export type _UnmarshalledBatchStopJobRunSuccessfulSubmission = _BatchStopJobRunSuccessfulSubmission;
