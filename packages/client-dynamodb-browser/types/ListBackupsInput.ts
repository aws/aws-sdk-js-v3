import {BrowserHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ListBackupsInput shape
 */
export interface ListBackupsInput {
    /**
     * <p>The backups from the table specified by <code>TableName</code> are listed. </p>
     */
    TableName?: string;

    /**
     * <p>Maximum number of backups to return at once.</p>
     */
    Limit?: number;

    /**
     * <p>Only backups created after this time are listed. <code>TimeRangeLowerBound</code> is inclusive.</p>
     */
    TimeRangeLowerBound?: Date|string|number;

    /**
     * <p>Only backups created before this time are listed. <code>TimeRangeUpperBound</code> is exclusive. </p>
     */
    TimeRangeUpperBound?: Date|string|number;

    /**
     * <p> <code>LastEvaluatedBackupArn</code> is the ARN of the backup last evaluated when the current page of results was returned, inclusive of the current page of results. This value may be specified as the <code>ExclusiveStartBackupArn</code> of a new <code>ListBackups</code> operation in order to fetch the next page of results. </p>
     */
    ExclusiveStartBackupArn?: string;

    /**
     * <p>The backups from the table specified by <code>BackupType</code> are listed.</p> <p>Where <code>BackupType</code> can be:</p> <ul> <li> <p> <code>USER</code> - On-demand backup created by you.</p> </li> <li> <p> <code>SYSTEM</code> - On-demand backup automatically created by DynamoDB.</p> </li> <li> <p> <code>ALL</code> - All types of on-demand backups (USER and SYSTEM).</p> </li> </ul>
     */
    BackupType?: 'USER'|'SYSTEM'|'ALL'|string;

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