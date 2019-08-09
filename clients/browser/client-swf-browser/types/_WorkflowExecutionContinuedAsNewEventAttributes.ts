import { _TaskList, _UnmarshalledTaskList } from "./_TaskList";
import { _WorkflowType, _UnmarshalledWorkflowType } from "./_WorkflowType";

/**
 * <p>Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event.</p>
 */
export interface _WorkflowExecutionContinuedAsNewEventAttributes {
  /**
   * <p>The input provided to the new workflow execution.</p>
   */
  input?: string;

  /**
   * <p>The ID of the <code>DecisionTaskCompleted</code> event corresponding to the decision task that resulted in the <code>ContinueAsNewWorkflowExecution</code> decision that started this execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  decisionTaskCompletedEventId: number;

  /**
   * <p>The <code>runId</code> of the new workflow execution.</p>
   */
  newExecutionRunId: string;

  /**
   * <p>The total duration allowed for the new workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The task list to use for the decisions of the new (continued) workflow execution.</p>
   */
  taskList: _TaskList;

  /**
   * <p>The priority of the task to use for the decisions of the new (continued) workflow execution.</p>
   */
  taskPriority?: string;

  /**
   * <p>The maximum duration of decision tasks for the new workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The policy to use for the child workflow executions of the new execution if it is terminated by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>
   */
  childPolicy: "TERMINATE" | "REQUEST_CANCEL" | "ABANDON" | string;

  /**
   * <p>The list of tags associated with the new workflow execution.</p>
   */
  tagList?: Array<string> | Iterable<string>;

  /**
   * <p>The workflow type of this execution.</p>
   */
  workflowType: _WorkflowType;

  /**
   * <p>The IAM role to attach to the new (continued) workflow execution.</p>
   */
  lambdaRole?: string;
}

export interface _UnmarshalledWorkflowExecutionContinuedAsNewEventAttributes
  extends _WorkflowExecutionContinuedAsNewEventAttributes {
  /**
   * <p>The task list to use for the decisions of the new (continued) workflow execution.</p>
   */
  taskList: _UnmarshalledTaskList;

  /**
   * <p>The list of tags associated with the new workflow execution.</p>
   */
  tagList?: Array<string>;

  /**
   * <p>The workflow type of this execution.</p>
   */
  workflowType: _UnmarshalledWorkflowType;
}
