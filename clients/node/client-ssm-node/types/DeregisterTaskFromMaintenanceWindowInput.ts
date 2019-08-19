import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeregisterTaskFromMaintenanceWindowInput shape
 */
export interface DeregisterTaskFromMaintenanceWindowInput {
  /**
   * <p>The ID of the maintenance window the task should be removed from.</p>
   */
  WindowId: string;

  /**
   * <p>The ID of the task to remove from the maintenance window.</p>
   */
  WindowTaskId: string;

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
