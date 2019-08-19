/**
 * <p>Calls a Lambda function, passing in information about the detector model instance and the event which triggered the action.</p>
 */
export interface _LambdaAction {
  /**
   * <p>The ARN of the Lambda function which is executed.</p>
   */
  functionArn: string;
}

export type _UnmarshalledLambdaAction = _LambdaAction;
