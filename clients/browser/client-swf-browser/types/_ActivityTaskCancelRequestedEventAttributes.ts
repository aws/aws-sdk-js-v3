/**
 * <p>Provides the details of the <code>ActivityTaskCancelRequested</code> event.</p>
 */
export interface _ActivityTaskCancelRequestedEventAttributes {
  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>RequestCancelActivityTask</code> decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;

  /**
   * <p>The unique ID of the task.</p>
   */
  activityId: string;
}

export type _UnmarshalledActivityTaskCancelRequestedEventAttributes = _ActivityTaskCancelRequestedEventAttributes;
