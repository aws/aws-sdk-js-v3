/**
 * <p>Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types.</p>
 */
export interface _LambdaFunctionCompletedEventAttributes {
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this Lambda task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;

  /**
   * <p>The ID of the <code>LambdaFunctionStarted</code> event recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  startedEventId: number;

  /**
   * <p>The results of the Lambda task.</p>
   */
  result?: string;
}

export type _UnmarshalledLambdaFunctionCompletedEventAttributes = _LambdaFunctionCompletedEventAttributes;
