import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBackupJobsInput shape
 */
export interface ListBackupJobsInput {
  /**
   * <p>The next item following a partial list of returned items. For example, if a request is made to return <code>maxResults</code> number of items, <code>NextToken</code> allows you to return more items in your list starting at the location pointed to by the next token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>Returns only backup jobs that match the specified resource Amazon Resource Name (ARN).</p>
   */
  ByResourceArn?: string;

  /**
   * <p>Returns only backup jobs that are in the specified state.</p>
   */
  ByState?:
    | "CREATED"
    | "PENDING"
    | "RUNNING"
    | "ABORTING"
    | "ABORTED"
    | "COMPLETED"
    | "FAILED"
    | "EXPIRED"
    | string;

  /**
   * <p>Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the AWS Region where they are created. They consist of lowercase letters, numbers, and hyphens.</p>
   */
  ByBackupVaultName?: string;

  /**
   * <p>Returns only backup jobs that were created before the specified date.</p>
   */
  ByCreatedBefore?: Date | string | number;

  /**
   * <p>Returns only backup jobs that were created after the specified date.</p>
   */
  ByCreatedAfter?: Date | string | number;

  /**
   * <p>Returns only backup jobs for the specified resources:</p> <ul> <li> <p> <code>EBS</code> for Amazon Elastic Block Store</p> </li> <li> <p> <code>SGW</code> for AWS Storage Gateway</p> </li> <li> <p> <code>RDS</code> for Amazon Relational Database Service</p> </li> <li> <p> <code>DDB</code> for Amazon DynamoDB</p> </li> <li> <p> <code>EFS</code> for Amazon Elastic File System</p> </li> </ul>
   */
  ByResourceType?: string;

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
