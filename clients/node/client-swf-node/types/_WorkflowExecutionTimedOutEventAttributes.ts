/**
 * <p>Provides the details of the <code>WorkflowExecutionTimedOut</code> event.</p>
 */
export interface _WorkflowExecutionTimedOutEventAttributes {
  /**
   * <p>The type of timeout that caused this event.</p>
   */
  timeoutType: "START_TO_CLOSE" | string;

  /**
   * <p>The policy used for the child workflow executions of this workflow execution.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul>
   */
  childPolicy: "TERMINATE" | "REQUEST_CANCEL" | "ABANDON" | string;
}

export type _UnmarshalledWorkflowExecutionTimedOutEventAttributes = _WorkflowExecutionTimedOutEventAttributes;
