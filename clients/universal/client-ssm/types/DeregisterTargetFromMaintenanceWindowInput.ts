import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeregisterTargetFromMaintenanceWindowInput shape
 */
export interface DeregisterTargetFromMaintenanceWindowInput {
  /**
   * <p>The ID of the maintenance window the target should be removed from.</p>
   */
  WindowId: string;

  /**
   * <p>The ID of the target definition to remove.</p>
   */
  WindowTargetId: string;

  /**
   * <p>The system checks if the target is being referenced by a task. If the target is being referenced, the system returns an error and does not deregister the target from the maintenance window.</p>
   */
  Safe?: boolean;

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
