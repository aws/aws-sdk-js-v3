/**
 * <p>Contains details about the execution timeout that occurred during the execution.</p>
 */
export interface _ExecutionTimedOutEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the timeout.</p>
   */
  cause?: string;
}

export type _UnmarshalledExecutionTimedOutEventDetails = _ExecutionTimedOutEventDetails;
