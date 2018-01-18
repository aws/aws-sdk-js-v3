import {AbortSignal as __AbortSignal__, NodeHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * GetMergeConflictsInput shape
 */
export interface GetMergeConflictsInput {
    /**
     * <p>The name of the repository where the pull request was created.</p>
     */
    repositoryName: string;

    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>
     */
    destinationCommitSpecifier: string;

    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, a branch name or a full commit ID.</p>
     */
    sourceCommitSpecifier: string;

    /**
     * <p>The merge option or strategy you want to use to merge the code. The only valid value is FAST_FORWARD_MERGE.</p>
     */
    mergeOption: 'FAST_FORWARD_MERGE'|string;

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