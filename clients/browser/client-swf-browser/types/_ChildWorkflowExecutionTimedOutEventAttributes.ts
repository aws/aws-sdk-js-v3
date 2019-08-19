import {
  _WorkflowExecution,
  _UnmarshalledWorkflowExecution
} from "./_WorkflowExecution";
import { _WorkflowType, _UnmarshalledWorkflowType } from "./_WorkflowType";

/**
 * <p>Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event.</p>
 */
export interface _ChildWorkflowExecutionTimedOutEventAttributes {
  /**
   * <p>The child workflow execution that timed out.</p>
   */
  workflowExecution: _WorkflowExecution;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: _WorkflowType;

  /**
   * <p>The type of the timeout that caused the child workflow execution to time out.</p>
   */
  timeoutType: "START_TO_CLOSE" | string;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  initiatedEventId: number;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  startedEventId: number;
}

export interface _UnmarshalledChildWorkflowExecutionTimedOutEventAttributes
  extends _ChildWorkflowExecutionTimedOutEventAttributes {
  /**
   * <p>The child workflow execution that timed out.</p>
   */
  workflowExecution: _UnmarshalledWorkflowExecution;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: _UnmarshalledWorkflowType;
}
