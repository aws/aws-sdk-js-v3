import { _NetworkBinding } from "./_NetworkBinding";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SubmitContainerStateChangeInput shape
 */
export interface SubmitContainerStateChangeInput {
  /**
   * <p>The short name or full ARN of the cluster that hosts the container.</p>
   */
  cluster?: string;

  /**
   * <p>The task ID or full Amazon Resource Name (ARN) of the task that hosts the container.</p>
   */
  task?: string;

  /**
   * <p>The name of the container.</p>
   */
  containerName?: string;

  /**
   * <p>The status of the state change request.</p>
   */
  status?: string;

  /**
   * <p>The exit code returned for the state change request.</p>
   */
  exitCode?: number;

  /**
   * <p>The reason for the state change request.</p>
   */
  reason?: string;

  /**
   * <p>The network bindings of the container.</p>
   */
  networkBindings?: Array<_NetworkBinding> | Iterable<_NetworkBinding>;

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
