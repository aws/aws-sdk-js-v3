/**
 * <p>Provides the details of the <code>WorkflowExecutionTerminated</code> event.</p>
 */
export interface _WorkflowExecutionTerminatedEventAttributes {
  /**
   * <p>The reason provided for the termination.</p>
   */
  reason?: string;

  /**
   * <p>The details provided for the termination.</p>
   */
  details?: string;

  /**
   * <p>The policy used for the child workflow executions of this workflow execution.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>
   */
  childPolicy: "TERMINATE" | "REQUEST_CANCEL" | "ABANDON" | string;

  /**
   * <p>If set, indicates that the workflow execution was automatically terminated, and specifies the cause. This happens if the parent workflow execution times out or is terminated and the child policy is set to terminate child executions.</p>
   */
  cause?:
    | "CHILD_POLICY_APPLIED"
    | "EVENT_LIMIT_EXCEEDED"
    | "OPERATOR_INITIATED"
    | string;
}

export type _UnmarshalledWorkflowExecutionTerminatedEventAttributes = _WorkflowExecutionTerminatedEventAttributes;
