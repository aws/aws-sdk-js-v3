/**
 * <p>Contains details about a lambda function that failed to start during an execution.</p>
 */
export interface _LambdaFunctionStartFailedEventDetails {
  /**
   * <p>The error code of the failure.</p>
   */
  error?: string;

  /**
   * <p>A more detailed explanation of the cause of the failure.</p>
   */
  cause?: string;
}

export type _UnmarshalledLambdaFunctionStartFailedEventDetails = _LambdaFunctionStartFailedEventDetails;
