/**
 * <p>Describes an action to invoke a Lambda function.</p>
 */
export interface _LambdaAction {
  /**
   * <p>The ARN of the Lambda function.</p>
   */
  functionArn: string;
}

export type _UnmarshalledLambdaAction = _LambdaAction;
