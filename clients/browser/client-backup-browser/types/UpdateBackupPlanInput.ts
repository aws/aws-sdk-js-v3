import { _BackupPlanInput } from "./_BackupPlanInput";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateBackupPlanInput shape
 */
export interface UpdateBackupPlanInput {
  /**
   * <p>Uniquely identifies a backup plan.</p>
   */
  BackupPlanId: string;

  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or more sets of <code>Rules</code>.</p>
   */
  BackupPlan: _BackupPlanInput;

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
