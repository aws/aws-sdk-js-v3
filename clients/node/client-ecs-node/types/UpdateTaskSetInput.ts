import { _Scale } from "./_Scale";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateTaskSetInput shape
 */
export interface UpdateTaskSetInput {
  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in.</p>
   */
  cluster: string;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.</p>
   */
  service: string;

  /**
   * <p>The short name or full Amazon Resource Name (ARN) of the task set to update.</p>
   */
  taskSet: string;

  /**
   * <p>A floating-point percentage of the desired number of tasks to place and keep running in the task set.</p>
   */
  scale: _Scale;

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
