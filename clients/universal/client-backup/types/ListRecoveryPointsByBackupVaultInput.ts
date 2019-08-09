import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRecoveryPointsByBackupVaultInput shape
 */
export interface ListRecoveryPointsByBackupVaultInput {
  /**
   * <p>The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  BackupVaultName: string;

  /**
   * <p>The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>Returns only recovery points that match the specified resource Amazon Resource Name (ARN).</p>
   */
  ByResourceArn?: string;

  /**
   * <p>Returns only recovery points that match the specified resource type.</p>
   */
  ByResourceType?: string;

  /**
   * <p>Returns only recovery points that match the specified backup plan ID.</p>
   */
  ByBackupPlanId?: string;

  /**
   * <p>Returns only recovery points that were created before the specified timestamp.</p>
   */
  ByCreatedBefore?: Date | string | number;

  /**
   * <p>Returns only recovery points that were created after the specified timestamp.</p>
   */
  ByCreatedAfter?: Date | string | number;

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
