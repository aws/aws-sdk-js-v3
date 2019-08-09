import { _PolicyDetails } from "./_PolicyDetails";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateLifecyclePolicyInput shape
 */
export interface CreateLifecyclePolicyInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>
   */
  ExecutionRoleArn: string;

  /**
   * <p>A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.</p>
   */
  Description: string;

  /**
   * <p>The desired activation state of the lifecycle policy after creation.</p>
   */
  State: "ENABLED" | "DISABLED" | string;

  /**
   * <p>The configuration details of the lifecycle policy.</p> <p>Target tags cannot be re-used across lifecycle policies.</p>
   */
  PolicyDetails: _PolicyDetails;

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
