import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutLifecycleEventHookExecutionStatusInput shape
 */
export interface PutLifecycleEventHookExecutionStatusInput {
  /**
   * <p> The unique ID of a deployment. Pass this ID to a Lambda function that validates a deployment lifecycle event. </p>
   */
  deploymentId?: string;

  /**
   * <p> The execution ID of a deployment's lifecycle hook. A deployment lifecycle hook is specified in the <code>hooks</code> section of the AppSpec file. </p>
   */
  lifecycleEventHookExecutionId?: string;

  /**
   * <p>The result of a Lambda function that validates a deployment lifecycle event (<code>Succeeded</code> or <code>Failed</code>).</p>
   */
  status?:
    | "Pending"
    | "InProgress"
    | "Succeeded"
    | "Failed"
    | "Skipped"
    | "Unknown"
    | string;

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
