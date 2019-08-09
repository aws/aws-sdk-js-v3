import { _TaskList, _UnmarshalledTaskList } from "./_TaskList";
import { _WorkflowType, _UnmarshalledWorkflowType } from "./_WorkflowType";
import {
  _WorkflowExecution,
  _UnmarshalledWorkflowExecution
} from "./_WorkflowExecution";

/**
 * <p>Provides details of <code>WorkflowExecutionStarted</code> event.</p>
 */
export interface _WorkflowExecutionStartedEventAttributes {
  /**
   * <p>The input provided to the workflow execution.</p>
   */
  input?: string;

  /**
   * <p>The maximum duration for this workflow execution.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  executionStartToCloseTimeout?: string;

  /**
   * <p>The maximum duration of decision tasks for this workflow type.</p> <p>The duration is specified in seconds, an integer greater than or equal to <code>0</code>. You can use <code>NONE</code> to specify unlimited duration.</p>
   */
  taskStartToCloseTimeout?: string;

  /**
   * <p>The policy to use for the child workflow executions if this workflow execution is terminated, by calling the <a>TerminateWorkflowExecution</a> action explicitly or due to an expired timeout.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>
   */
  childPolicy: "TERMINATE" | "REQUEST_CANCEL" | "ABANDON" | string;

  /**
   * <p>The name of the task list for scheduling the decision tasks for this workflow execution.</p>
   */
  taskList: _TaskList;

  /**
   * <p>The priority of the decision tasks in the workflow execution.</p>
   */
  taskPriority?: string;

  /**
   * <p>The workflow type of this execution.</p>
   */
  workflowType: _WorkflowType;

  /**
   * <p>The list of tags associated with this workflow execution. An execution can have up to 5 tags.</p>
   */
  tagList?: Array<string> | Iterable<string>;

  /**
   * <p>If this workflow execution was started due to a <code>ContinueAsNewWorkflowExecution</code> decision, then it contains the <code>runId</code> of the previous workflow execution that was closed and continued as this execution.</p>
   */
  continuedExecutionRunId?: string;

  /**
   * <p>The source workflow execution that started this workflow execution. The member isn't set if the workflow execution was not started by a workflow.</p>
   */
  parentWorkflowExecution?: _WorkflowExecution;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this workflow execution. The source event with this ID can be found in the history of the source workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  parentInitiatedEventId?: number;

  /**
   * <p>The IAM role attached to the workflow execution.</p>
   */
  lambdaRole?: string;
}

export interface _UnmarshalledWorkflowExecutionStartedEventAttributes
  extends _WorkflowExecutionStartedEventAttributes {
  /**
   * <p>The name of the task list for scheduling the decision tasks for this workflow execution.</p>
   */
  taskList: _UnmarshalledTaskList;

  /**
   * <p>The workflow type of this execution.</p>
   */
  workflowType: _UnmarshalledWorkflowType;

  /**
   * <p>The list of tags associated with this workflow execution. An execution can have up to 5 tags.</p>
   */
  tagList?: Array<string>;

  /**
   * <p>The source workflow execution that started this workflow execution. The member isn't set if the workflow execution was not started by a workflow.</p>
   */
  parentWorkflowExecution?: _UnmarshalledWorkflowExecution;
}
