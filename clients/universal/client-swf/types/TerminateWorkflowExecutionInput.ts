import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * TerminateWorkflowExecutionInput shape
 */
export interface TerminateWorkflowExecutionInput {
  /**
   * <p>The domain of the workflow execution to terminate.</p>
   */
  domain: string;

  /**
   * <p>The workflowId of the workflow execution to terminate.</p>
   */
  workflowId: string;

  /**
   * <p>The runId of the workflow execution to terminate.</p>
   */
  runId?: string;

  /**
   * <p> A descriptive reason for terminating the workflow execution.</p>
   */
  reason?: string;

  /**
   * <p> Details for terminating the workflow execution.</p>
   */
  details?: string;

  /**
   * <p>If set, specifies the policy to use for the child workflow executions of the workflow execution being terminated. This policy overrides the child policy specified for the workflow execution at registration time or when starting the execution.</p> <p>The supported child policies are:</p> <ul> <li> <p> <code>TERMINATE</code> – The child executions are terminated.</p> </li> <li> <p> <code>REQUEST_CANCEL</code> – A request to cancel is attempted for each child execution by recording a <code>WorkflowExecutionCancelRequested</code> event in its history. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> </li> <li> <p> <code>ABANDON</code> – No action is taken. The child executions continue to run.</p> </li> </ul> <note> <p>A child policy for this workflow execution must be specified either as a default for the workflow type or through this parameter. If neither this parameter is set nor a default child policy was specified at registration time then a fault is returned.</p> </note>
   */
  childPolicy?: "TERMINATE" | "REQUEST_CANCEL" | "ABANDON" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
