import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ContinueDeploymentInput shape
 */
export interface ContinueDeploymentInput {
  /**
   * <p> The unique ID of a blue/green deployment for which you want to start rerouting traffic to the replacement environment. </p>
   */
  deploymentId?: string;

  /**
   * <p> The status of the deployment's waiting period. READY_WAIT indicates the deployment is ready to start shifting traffic. TERMINATION_WAIT indicates the traffic is shifted, but the original target is not terminated. </p>
   */
  deploymentWaitType?: "READY_WAIT" | "TERMINATION_WAIT" | string;

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
