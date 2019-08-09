/**
 * <p>Contains details about an execution failure event.</p>
 */
export interface _ExecutionFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export type _UnmarshalledExecutionFailedEventDetails = _ExecutionFailedEventDetails;
