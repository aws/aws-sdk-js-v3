import { _Target } from "./_Target";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateMaintenanceWindowTargetInput shape
 */
export interface UpdateMaintenanceWindowTargetInput {
  /**
   * <p>The maintenance window ID with which to modify the target.</p>
   */
  WindowId: string;

  /**
   * <p>The target ID to modify.</p>
   */
  WindowTargetId: string;

  /**
   * <p>The targets to add or replace.</p>
   */
  Targets?: Array<_Target> | Iterable<_Target>;

  /**
   * <p>User-provided value that will be included in any CloudWatch events raised while running tasks for these targets in this maintenance window.</p>
   */
  OwnerInformation?: string;

  /**
   * <p>A name for the update.</p>
   */
  Name?: string;

  /**
   * <p>An optional description for the update.</p>
   */
  Description?: string;

  /**
   * <p>If True, then all fields that are required by the RegisterTargetWithMaintenanceWindow action are also required for this API request. Optional fields that are not specified are set to null.</p>
   */
  Replace?: boolean;

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
