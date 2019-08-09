import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteTaskSetInput shape
 */
export interface DeleteTaskSetInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in to delete.</p>
   */
  cluster: string;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that hosts the task set to delete.</p>
   */
  service: string;

  /**
   * <p>The task set ID or full Amazon Resource Name (ARN) of the task set to delete.</p>
   */
  taskSet: string;

  /**
   * <p>If <code>true</code>, this allows you to delete a task set even if it hasn't been scaled down to zero.</p>
   */
  force?: boolean;

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
