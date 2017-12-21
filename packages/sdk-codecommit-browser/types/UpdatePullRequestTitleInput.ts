/**
 * UpdatePullRequestTitleInput shape
 */
export interface UpdatePullRequestTitleInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string;

    /**
     * <p>The updated title of the pull request. This will replace the existing title.</p>
     */
    title: string;
}