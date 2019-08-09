/**
 * <p>Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types.</p>
 */
export interface _LambdaFunctionScheduledEventAttributes {
  /**
   * <p>The unique ID of the Lambda task.</p>
   */
  id: string;

  /**
   * <p>The name of the Lambda function.</p>
   */
  name: string;

  /**
   * <p>Data attached to the event that the decider can use in subsequent workflow tasks. This data isn't sent to the Lambda task.</p>
   */
  control?: string;

  /**
   * <p>The input provided to the Lambda task.</p>
   */
  input?: string;

  /**
   * <p>The maximum amount of time a worker can take to process the Lambda task.</p>
   */
  startToCloseTimeout?: string;

  /**
   * <p>The ID of the <code>LambdaFunctionCompleted</code> event corresponding to the decision that resulted in scheduling this activity task. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;
}

export type _UnmarshalledLambdaFunctionScheduledEventAttributes = _LambdaFunctionScheduledEventAttributes;
