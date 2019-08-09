import { _WorkflowType, _UnmarshalledWorkflowType } from "./_WorkflowType";
import { _TaskList, _UnmarshalledTaskList } from "./_TaskList";

/**
 * <p>Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.</p>
 */
export interface _StartChildWorkflowExecutionInitiatedEventAttributes {
  /**
   * <p>The <code>workflowId</code> of the child workflow execution.</p>
   */
  workflowId: string;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: _WorkflowType;

  /**
   * <p>Data attached to the event that can be used by the decider in subsequent decision tasks. This data isn't sent to the activity.</p>
   */
  control?: string;

  /**
   * <p>The inputs provided to the child workflow execution.</p>
   */
  input?: string;

  /**
   * <p>The maximum duration for the child workflow execution. If the workflow execution isn't closed within this duration, it is timed out and force-terminated.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The name of the task list used for the decision tasks of the child workflow execution.</p>
   */
  taskList: _TaskList;

  /**
   * <p> The priority assigned for the decision tasks for this workflow execution. Valid values are integers that range from Java's <code>Integer.MIN_VALUE</code> (-2147483648) to <code>Integer.MAX_VALUE</code> (2147483647). Higher numbers indicate higher priority.</p> <p>For more information about setting task priority, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/programming-priority.html">Setting Task Priority</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  taskPriority?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>StartChildWorkflowExecution</code> <a>Decision</a> to request this child workflow execution. This information can be useful for diagnosing problems by tracing back the cause of events.</p>
   */
  decisionTaskCompletedEventId: number;

  /**
   * <p>The policy to use for the child workflow executions if this execution gets terminated by explicitly calling the <a>TerminateWorkflowExecution</a> action or due to an expired timeout.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>
   */
  childPolicy: "TERMINATE" | "REQUEST_CANCEL" | "ABANDON" | string;

  /**
   * <p>The maximum duration allowed for the decision tasks for this workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The list of tags to associated with the child workflow execution.</p>
   */
  tagList?: Array<string> | Iterable<string>;

  /**
   * <p>The IAM role to attach to the child workflow execution.</p>
   */
  lambdaRole?: string;
}

export interface _UnmarshalledStartChildWorkflowExecutionInitiatedEventAttributes
  extends _StartChildWorkflowExecutionInitiatedEventAttributes {
  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: _UnmarshalledWorkflowType;

  /**
   * <p>The name of the task list used for the decision tasks of the child workflow execution.</p>
   */
  taskList: _UnmarshalledTaskList;

  /**
   * <p>The list of tags to associated with the child workflow execution.</p>
   */
  tagList?: Array<string>;
}
