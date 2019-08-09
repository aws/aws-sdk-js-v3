import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SignalWorkflowExecutionInput shape
 */
export interface SignalWorkflowExecutionInput {
  /**
   * <p>The name of the domain containing the workflow execution to signal.</p>
   */
  domain: string;

  /**
   * <p>The workflowId of the workflow execution to signal.</p>
   */
  workflowId: string;

  /**
   * <p>The runId of the workflow execution to signal.</p>
   */
  runId?: string;

  /**
   * <p>The name of the signal. This name must be meaningful to the target workflow.</p>
   */
  signalName: string;

  /**
   * <p>Data to attach to the <code>WorkflowExecutionSignaled</code> event in the target workflow execution's history.</p>
   */
  input?: string;

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
