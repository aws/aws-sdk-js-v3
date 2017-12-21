/**
 * UpdatePullRequestDescriptionInput shape
 */
export interface UpdatePullRequestDescriptionInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string;

    /**
     * <p>The updated content of the description for the pull request. This content will replace the existing description.</p>
     */
    description: string;
}