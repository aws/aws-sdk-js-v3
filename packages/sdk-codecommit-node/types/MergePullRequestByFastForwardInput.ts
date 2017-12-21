/**
 * MergePullRequestByFastForwardInput shape
 */
export interface MergePullRequestByFastForwardInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string;

    /**
     * <p>The name of the repository where the pull request was created.</p>
     */
    repositoryName: string;

    /**
     * <p>The full commit ID of the original or updated commit in the pull request source branch. Pass this value if you want an exception thrown if the current commit ID of the tip of the source branch does not match this commit ID.</p>
     */
    sourceCommitId?: string;
}