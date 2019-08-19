import { _ComputeResourceUpdate } from "./_ComputeResourceUpdate";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateComputeEnvironmentInput shape
 */
export interface UpdateComputeEnvironmentInput {
  /**
   * <p>The name or full Amazon Resource Name (ARN) of the compute environment to update.</p>
   */
  computeEnvironment: string;

  /**
   * <p>The state of the compute environment. Compute environments in the <code>ENABLED</code> state can accept jobs from a queue and scale in or out automatically based on the workload demand of its associated queues.</p>
   */
  state?: "ENABLED" | "DISABLED" | string;

  /**
   * <p>Details of the compute resources managed by the compute environment. Required for a managed compute environment.</p>
   */
  computeResources?: _ComputeResourceUpdate;

  /**
   * <p>The full Amazon Resource Name (ARN) of the IAM role that allows AWS Batch to make calls to other AWS services on your behalf.</p> <p>If your specified role has a path other than <code>/</code>, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path.</p> <note> <p>Depending on how you created your AWS Batch service role, its ARN may contain the <code>service-role</code> path prefix. When you only specify the name of the service role, AWS Batch assumes that your ARN does not use the <code>service-role</code> path prefix. Because of this, we recommend that you specify the full ARN of your service role when you create compute environments.</p> </note>
   */
  serviceRole?: string;

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
