import {
  _WorkflowExecution,
  _UnmarshalledWorkflowExecution
} from "./_WorkflowExecution";
import { _WorkflowType, _UnmarshalledWorkflowType } from "./_WorkflowType";

/**
 * <p>Contains information about a workflow execution.</p>
 */
export interface _WorkflowExecutionInfo {
  /**
   * <p>The workflow execution this information is about.</p>
   */
  execution: _WorkflowExecution;

  /**
   * <p>The type of the workflow execution.</p>
   */
  workflowType: _WorkflowType;

  /**
   * <p>The time when the execution was started.</p>
   */
  startTimestamp: Date | string | number;

  /**
   * <p>The time when the workflow execution was closed. Set only if the execution status is CLOSED.</p>
   */
  closeTimestamp?: Date | string | number;

  /**
   * <p>The current status of the execution.</p>
   */
  executionStatus: "OPEN" | "CLOSED" | string;

  /**
   * <p>If the execution status is closed then this specifies how the execution was closed:</p> <ul> <li> <p> <code>COMPLETED</code> – the execution was successfully completed.</p> </li> <li> <p> <code>CANCELED</code> – the execution was canceled.Cancellation allows the implementation to gracefully clean up before the execution is closed.</p> </li> <li> <p> <code>TERMINATED</code> – the execution was force terminated.</p> </li> <li> <p> <code>FAILED</code> – the execution failed to complete.</p> </li> <li> <p> <code>TIMED_OUT</code> – the execution did not complete in the alloted time and was automatically timed out.</p> </li> <li> <p> <code>CONTINUED_AS_NEW</code> – the execution is logically continued. This means the current execution was completed and a new execution was started to carry on the workflow.</p> </li> </ul>
   */
  closeStatus?:
    | "COMPLETED"
    | "FAILED"
    | "CANCELED"
    | "TERMINATED"
    | "CONTINUED_AS_NEW"
    | "TIMED_OUT"
    | string;

  /**
   * <p>If this workflow execution is a child of another execution then contains the workflow execution that started this execution.</p>
   */
  parent?: _WorkflowExecution;

  /**
   * <p>The list of tags associated with the workflow execution. Tags can be used to identify and list workflow executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags.</p>
   */
  tagList?: Array<string> | Iterable<string>;

  /**
   * <p>Set to true if a cancellation is requested for this workflow execution.</p>
   */
  cancelRequested?: boolean;
}

export interface _UnmarshalledWorkflowExecutionInfo
  extends _WorkflowExecutionInfo {
  /**
   * <p>The workflow execution this information is about.</p>
   */
  execution: _UnmarshalledWorkflowExecution;

  /**
   * <p>The type of the workflow execution.</p>
   */
  workflowType: _UnmarshalledWorkflowType;

  /**
   * <p>The time when the execution was started.</p>
   */
  startTimestamp: Date;

  /**
   * <p>The time when the workflow execution was closed. Set only if the execution status is CLOSED.</p>
   */
  closeTimestamp?: Date;

  /**
   * <p>If this workflow execution is a child of another execution then contains the workflow execution that started this execution.</p>
   */
  parent?: _UnmarshalledWorkflowExecution;

  /**
   * <p>The list of tags associated with the workflow execution. Tags can be used to identify and list workflow executions of interest through the visibility APIs. A workflow execution can have a maximum of 5 tags.</p>
   */
  tagList?: Array<string>;
}
