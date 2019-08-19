/**
 * <p>Contains details about a lambda function scheduled during an execution.</p>
 */
export interface _LambdaFunctionScheduledEventDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled lambda function.</p>
   */
  resource: string;

  /**
   * <p>The JSON data input to the lambda function.</p>
   */
  input?: string;

  /**
   * <p>The maximum allowed duration of the lambda function.</p>
   */
  timeoutInSeconds?: number;
}

export type _UnmarshalledLambdaFunctionScheduledEventDetails = _LambdaFunctionScheduledEventDetails;
