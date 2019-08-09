/**
 * <p>Provides the details of the <code>ActivityTaskStarted</code> event.</p>
 */
export interface _ActivityTaskStartedEventAttributes {
  /**
   * <p>Identity of the worker that was assigned this task. This aids diagnostics when problems arise. The form of this identity is user defined.</p>
   */
  identity?: string;

  /**
   * <p>The ID of the <code>ActivityTaskScheduled</code> event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  scheduledEventId: number;
}

export type _UnmarshalledActivityTaskStartedEventAttributes = _ActivityTaskStartedEventAttributes;
