import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned by <a>StartWorkflowExecution</a> when an open execution with the same workflowId is already running in the specified domain.</p>
 */
export interface WorkflowExecutionAlreadyStartedFault
  extends __ServiceException__<_WorkflowExecutionAlreadyStartedFaultDetails> {
  name: "WorkflowExecutionAlreadyStartedFault";
}

export interface _WorkflowExecutionAlreadyStartedFaultDetails {
  /**
   * <p>A description that may help with diagnosing the cause of the fault.</p>
   */
  message?: string;
}
