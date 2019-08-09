import { _ActivityType, _UnmarshalledActivityType } from "./_ActivityType";
import { _TaskList, _UnmarshalledTaskList } from "./_TaskList";

/**
 * <p>Provides the details of the <code>ActivityTaskScheduled</code> event.</p>
 */
export interface _ActivityTaskScheduledEventAttributes {
  /**
   * <p>The type of the activity task.</p>
   */
  activityType: _ActivityType;

  /**
   * <p>The unique ID of the activity task.</p>
   */
  activityId: string;

  /**
   * <p>The input provided to the activity task.</p>
   */
  input?: string;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent workflow tasks. This data isn't sent to the activity.</p>
   */
  control?: string;

  /**
   * <p>The maximum amount of time the activity task can wait to be assigned to a worker.</p>
   */
  scheduleToStartTimeout?: string;

  /**
   * <p>The maximum amount of time for this activity task.</p>
   */
  scheduleToCloseTimeout?: string;

  /**
   * <p>The maximum amount of time a worker may take to process the activity task.</p>
   */
  startToCloseTimeout?: string;

  /**
   * <p>The task list in which the activity task has been scheduled.</p>
   */
  taskList: _TaskList;

  /**
   * <p> The priority to assign to the scheduled activity task. If set, this overrides any default priority value that was assigned when the activity type was registered.</p> <p>Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  taskPriority?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision that resulted in the scheduling of this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;

  /**
   * <p>The maximum time before which the worker processing this task must report progress by calling <a>RecordActivityTaskHeartbeat</a>. If the timeout is exceeded, the activity task is automatically timed out. If the worker subsequently attempts to record a heartbeat or return a result, it is ignored.</p>
   */
  heartbeatTimeout?: string;
}

export interface _UnmarshalledActivityTaskScheduledEventAttributes
  extends _ActivityTaskScheduledEventAttributes {
  /**
   * <p>The type of the activity task.</p>
   */
  activityType: _UnmarshalledActivityType;

  /**
   * <p>The task list in which the activity task has been scheduled.</p>
   */
  taskList: _UnmarshalledTaskList;
}
