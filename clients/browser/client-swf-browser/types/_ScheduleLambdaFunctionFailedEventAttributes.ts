/**
 * <p>Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types.</p>
 */
export interface _ScheduleLambdaFunctionFailedEventAttributes {
  /**
   * <p>The ID provided in the <code>ScheduleLambdaFunction</code> decision that failed. </p>
   */
  id: string;

  /**
   * <p>The name of the Lambda function.</p>
   */
  name: string;

  /**
   * <p>The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>
   */
  cause:
    | "ID_ALREADY_IN_USE"
    | "OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED"
    | "LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED"
    | "LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION"
    | string;

  /**
   * <p>The ID of the <code>LambdaFunctionCompleted</code> event corresponding to the decision that resulted in scheduling this Lambda task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;
}

export type _UnmarshalledScheduleLambdaFunctionFailedEventAttributes = _ScheduleLambdaFunctionFailedEventAttributes;
