import { _TaskList, _UnmarshalledTaskList } from "./_TaskList";

/**
 * <p>Provides details about the <code>DecisionTaskScheduled</code> event.</p>
 */
export interface _DecisionTaskScheduledEventAttributes {
  /**
   * <p>The name of the task list in which the decision task was scheduled.</p>
   */
  taskList: _TaskList;

  /**
   * <p> A task priority that, if set, specifies the priority for this decision task. Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  taskPriority?: string;

  /**
   * <p>The maximum duration for this decision task. The task is considered timed out if it doesn't completed within this duration.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  startToCloseTimeout?: string;
}

export interface _UnmarshalledDecisionTaskScheduledEventAttributes
  extends _DecisionTaskScheduledEventAttributes {
  /**
   * <p>The name of the task list in which the decision task was scheduled.</p>
   */
  taskList: _UnmarshalledTaskList;
}
