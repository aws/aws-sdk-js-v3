/**
 * <p>Contains details about a failed lambda function schedule event that occurred during an execution.</p>
 */
export interface _LambdaFunctionScheduleFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export type _UnmarshalledLambdaFunctionScheduleFailedEventDetails = _LambdaFunctionScheduleFailedEventDetails;
