/**
 * <p>Contains details about the start of the execution.</p>
 */
export interface _ExecutionStartedEventDetails {
  /**
   * <p>The JSON data input to the execution.</p>
   */
  input?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used for executing AWS Lambda tasks.</p>
   */
  roleArn?: string;
}

export type _UnmarshalledExecutionStartedEventDetails = _ExecutionStartedEventDetails;
