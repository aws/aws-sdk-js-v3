import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Represents the input of a StopDeployment operation. </p>
 */
export interface StopDeploymentInput {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId: string;

  /**
   * <p> Indicates, when a deployment is stopped, whether instances that have been updated should be rolled back to the previous version of the application revision. </p>
   */
  autoRollbackEnabled?: boolean;

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
