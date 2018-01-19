import {AbortSignal as __AbortSignal__, BrowserHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * GetCommentsForPullRequestInput shape
 */
export interface GetCommentsForPullRequestInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string;

    /**
     * <p>The name of the repository that contains the pull request.</p>
     */
    repositoryName?: string;

    /**
     * <p>The full commit ID of the commit in the destination branch that was the tip of the branch at the time the pull request was created.</p>
     */
    beforeCommitId?: string;

    /**
     * <p>The full commit ID of the commit in the source branch that was the tip of the branch at the time the comment was made.</p>
     */
    afterCommitId?: string;

    /**
     * <p>An enumeration token that when provided in a request, returns the next batch of the results.</p>
     */
    nextToken?: string;

    /**
     * <p>A non-negative integer used to limit the number of returned results. The default is 100 comments. You can return up to 500 comments with a single request.</p>
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