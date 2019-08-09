/**
 * <p>Provides details of the <code>LambdaFunctionTimedOut</code> event.</p>
 */
export interface _LambdaFunctionTimedOutEventAttributes {
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event that was recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  startedEventId: number;

  /**
   * <p>The type of the timeout that caused this event.</p>
   */
  timeoutType?: "START_TO_CLOSE" | string;
}

export type _UnmarshalledLambdaFunctionTimedOutEventAttributes = _LambdaFunctionTimedOutEventAttributes;
