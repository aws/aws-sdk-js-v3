/**
 * <p>Contains details about an abort of an execution.</p>
 */
export interface _ExecutionAbortedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export type _UnmarshalledExecutionAbortedEventDetails = _ExecutionAbortedEventDetails;
