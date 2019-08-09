/**
 * <p>Provides the details of the <code>ActivityTaskCanceled</code> event.</p>
 */
export interface _ActivityTaskCanceledEventAttributes {
  /**
   * <p>Details of the cancellation.</p>
   */
  details?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;

  /**
   * <p>The ID of the <code>ActivityTaskStarted</code> event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  startedEventId: number;

  /**
   * <p>If set, contains the ID of the last <code>ActivityTaskCancelRequested</code> event recorded for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  latestCancelRequestedEventId?: number;
}

export type _UnmarshalledActivityTaskCanceledEventAttributes = _ActivityTaskCanceledEventAttributes;
