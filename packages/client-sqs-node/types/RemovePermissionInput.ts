import {NodeHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p/>
 */
export interface RemovePermissionInput {
    /**
     * <p>The URL of the Amazon SQS queue from which permissions are removed.</p> <p>Queue URLs and names are case-sensitive.</p>
     */
    QueueUrl: string;

    /**
     * <p>The identification of the permission to remove. This is the label added using the <code> <a>AddPermission</a> </code> action.</p>
     */
    Label: string;

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