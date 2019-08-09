import { _BackupPlanInput } from "./_BackupPlanInput";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBackupPlanInput shape
 */
export interface CreateBackupPlanInput {
  /**
   * <p>Specifies the body of a backup plan. Includes a <code>BackupPlanName</code> and one or more sets of <code>Rules</code>.</p>
   */
  BackupPlan: _BackupPlanInput;

  /**
   * <p>To help organize your resources, you can assign your own metadata to the resources that you create. Each tag is a key-value pair. The specified tags are assigned to all backups created with this plan.</p>
   */
  BackupPlanTags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Identifies the request and allows failed requests to be retried without the risk of executing the operation twice. If the request includes a <code>CreatorRequestId</code> that matches an existing backup plan, that plan is returned. This parameter is optional.</p>
   */
  CreatorRequestId?: string;

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
