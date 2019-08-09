import {
  _WorkflowExecution,
  _UnmarshalledWorkflowExecution
} from "./_WorkflowExecution";
import { _WorkflowType, _UnmarshalledWorkflowType } from "./_WorkflowType";

/**
 * <p>Provide details of the <code>ChildWorkflowExecutionCanceled</code> event.</p>
 */
export interface _ChildWorkflowExecutionCanceledEventAttributes {
  /**
   * <p>The child workflow execution that was canceled.</p>
   */
  workflowExecution: _WorkflowExecution;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: _WorkflowType;

  /**
   * <p>Details of the cancellation (if provided).</p>
   */
  details?: string;

  /**
   * <p>The ID of the <code>StartChildWorkflowExecutionInitiated</code> event corresponding to the <code>StartChildWorkflowExecution</code> <a>Decision</a> to start this child workflow execution. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  initiatedEventId: number;

  /**
   * <p>The ID of the <code>ChildWorkflowExecutionStarted</code> event recorded when this child workflow execution was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.</p>
   */
  startedEventId: number;
}

export interface _UnmarshalledChildWorkflowExecutionCanceledEventAttributes
  extends _ChildWorkflowExecutionCanceledEventAttributes {
  /**
   * <p>The child workflow execution that was canceled.</p>
   */
  workflowExecution: _UnmarshalledWorkflowExecution;

  /**
   * <p>The type of the child workflow execution.</p>
   */
  workflowType: _UnmarshalledWorkflowType;
}
