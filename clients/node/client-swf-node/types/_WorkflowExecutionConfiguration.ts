import { _TaskList, _UnmarshalledTaskList } from "./_TaskList";

/**
 * <p>The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.</p>
 */
export interface _WorkflowExecutionConfiguration {
  /**
   * <p>The maximum duration allowed for decision tasks for this workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  taskStartToCloseTimeout: string;

  /**
   * <p>The total duration for this workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  executionStartToCloseTimeout: string;

  /**
   * <p>The task list used for the decision tasks generated for this workflow execution.</p>
   */
  taskList: _TaskList;

  /**
   * <p>The priority assigned to decision tasks for this workflow execution. Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  taskPriority?: string;

  /**
   * <p>The policy to use for the child workflow executions if this workflow execution is terminated, by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>
   */
  childPolicy: "TERMINATE" | "REQUEST_CANCEL" | "ABANDON" | string;

  /**
   * <p>The IAM role attached to the child workflow execution.</p>
   */
  lambdaRole?: string;
}

export interface _UnmarshalledWorkflowExecutionConfiguration
  extends _WorkflowExecutionConfiguration {
  /**
   * <p>The task list used for the decision tasks generated for this workflow execution.</p>
   */
  taskList: _UnmarshalledTaskList;
}
