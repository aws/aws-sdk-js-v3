import {BrowserHttpOptions as __HttpOptions__} from '@aws-sdk/types';
import * as __aws_types from '@aws-sdk/types';

/**
 * UpdateCommentInput shape
 */
export interface UpdateCommentInput {
    /**
     * <p>The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.</p>
     */
    commentId: string;

    /**
     * <p>The updated content with which you want to replace the existing content of the comment.</p>
     */
    content: string;

    /**
     * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __aws_types.AbortSignal;

    /**
     * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__;
}