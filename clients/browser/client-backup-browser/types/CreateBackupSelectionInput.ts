import { _BackupSelection } from "./_BackupSelection";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBackupSelectionInput shape
 */
export interface CreateBackupSelectionInput {
  /**
   * <p>Uniquely identifies the backup plan to be associated with the selection of resources.</p>
   */
  BackupPlanId: string;

  /**
   * <p>Specifies the body of a request to assign a set of resources to a backup plan.</p> <p>It includes an array of resources, an optional array of patterns to exclude resources, an optional role to provide access to the AWS service the resource belongs to, and an optional array of tags used to identify a set of resources.</p>
   */
  BackupSelection: _BackupSelection;

  /**
   * <p>A unique string that identifies the request and allows failed requests to be retried without the risk of executing the operation twice.</p>
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
