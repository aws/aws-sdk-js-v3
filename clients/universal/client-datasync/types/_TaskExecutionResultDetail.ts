/**
 * <p>Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.</p>
 */
export interface _TaskExecutionResultDetail {
  /**
   * <p>The total time in milliseconds that AWS DataSync spent in the PREPARING phase. </p>
   */
  PrepareDuration?: number;

  /**
   * <p>The status of the PREPARING phase.</p>
   */
  PrepareStatus?: "PENDING" | "SUCCESS" | "ERROR" | string;

  /**
   * <p>The total time in milliseconds that AWS DataSync spent in the TRANSFERRING phase.</p>
   */
  TransferDuration?: number;

  /**
   * <p>The status of the TRANSFERRING Phase.</p>
   */
  TransferStatus?: "PENDING" | "SUCCESS" | "ERROR" | string;

  /**
   * <p>The total time in milliseconds that AWS DataSync spent in the VERIFYING phase.</p>
   */
  VerifyDuration?: number;

  /**
   * <p>The status of the VERIFYING Phase.</p>
   */
  VerifyStatus?: "PENDING" | "SUCCESS" | "ERROR" | string;

  /**
   * <p>Errors that AWS DataSync encountered during execution of the task. You can use this error code to help troubleshoot issues.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Detailed description of an error that was encountered during the task execution. You can use this information to help troubleshoot issues. </p>
   */
  ErrorDetail?: string;
}

export type _UnmarshalledTaskExecutionResultDetail = _TaskExecutionResultDetail;
