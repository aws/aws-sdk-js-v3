/**
 * <p>Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types.</p>
 */
export interface _StartLambdaFunctionFailedEventAttributes {
  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId?: number;

  /**
   * <p>The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p> <note> <p>If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because the IAM role attached to the execution lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/lambda-task.html">Lambda Tasks</a> in the <i>Amazon SWF Developer Guide</i>.</p> </note>
   */
  cause?: "ASSUME_ROLE_FAILED" | string;

  /**
   * <p>A description that can help diagnose the cause of the fault.</p>
   */
  message?: string;
}

export type _UnmarshalledStartLambdaFunctionFailedEventAttributes = _StartLambdaFunctionFailedEventAttributes;
