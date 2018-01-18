import {AbortSignal as __AbortSignal__, BrowserHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * GetCommentsForComparedCommitInput shape
 */
export interface GetCommentsForComparedCommitInput {
    /**
     * <p>The name of the repository where you want to compare commits.</p>
     */
    repositoryName: string;

    /**
     * <p>To establish the directionality of the comparison, the full commit ID of the 'before' commit.</p>
     */
    beforeCommitId?: string;

    /**
     * <p>To establish the directionality of the comparison, the full commit ID of the 'after' commit.</p>
     */
    afterCommitId: string;

    /**
     * <p>An enumeration token that when provided in a request, returns the next batch of the results. </p>
     */
    nextToken?: string;

    /**
     * <p>A non-negative integer used to limit the number of returned results. The default is 100 comments, and is configurable up to 500.</p>
     */
    maxResults?: number;

    /**
     * The maximum number of times this operation should be retried. If set, this
     * value will override the `maxRetries` configuration set on the client for
     * this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __AbortSignal__

    /**
     * Per-request HTTP configuration options. If set, any options specified will
     * override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__
}