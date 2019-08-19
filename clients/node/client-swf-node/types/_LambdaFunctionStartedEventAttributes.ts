/**
 * <p>Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.</p>
 */
export interface _LambdaFunctionStartedEventAttributes {
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;
}

export type _UnmarshalledLambdaFunctionStartedEventAttributes = _LambdaFunctionStartedEventAttributes;
