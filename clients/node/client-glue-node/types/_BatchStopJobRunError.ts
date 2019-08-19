import { _ErrorDetail, _UnmarshalledErrorDetail } from "./_ErrorDetail";

/**
 * <p>Records an error that occurred when attempting to stop a specified job run.</p>
 */
export interface _BatchStopJobRunError {
  /**
   * <p>The name of the job definition that is used in the job run in question.</p>
   */
  JobName?: string;

  /**
   * <p>The <code>JobRunId</code> of the job run in question.</p>
   */
  JobRunId?: string;

  /**
   * <p>Specifies details about the error that was encountered.</p>
   */
  ErrorDetail?: _ErrorDetail;
}

export interface _UnmarshalledBatchStopJobRunError
  extends _BatchStopJobRunError {
  /**
   * <p>Specifies details about the error that was encountered.</p>
   */
  ErrorDetail?: _UnmarshalledErrorDetail;
}
