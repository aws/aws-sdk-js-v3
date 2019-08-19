/**
 * <p>Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.</p>
 */
export interface _LambdaFunctionFailedEventAttributes {
  /**
   * <p>The ID of the <code>LambdaFunctionScheduled</code> event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;

  /**
   * <p>The ID of the <code>LambdaFunctionStarted</code> event recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.</p>
   */
  startedEventId: number;

  /**
   * <p>The reason provided for the failure.</p>
   */
  reason?: string;

  /**
   * <p>The details of the failure.</p>
   */
  details?: string;
}

export type _UnmarshalledLambdaFunctionFailedEventAttributes = _LambdaFunctionFailedEventAttributes;
