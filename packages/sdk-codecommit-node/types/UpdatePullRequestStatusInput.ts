/**
 * UpdatePullRequestStatusInput shape
 */
export interface UpdatePullRequestStatusInput {
    /**
     * <p>The system-generated ID of the pull request. To get this ID, use <a>ListPullRequests</a>.</p>
     */
    pullRequestId: string;

    /**
     * <p>The status of the pull request. The only valid operations are to update the status from <code>OPEN</code> to <code>OPEN</code>, <code>OPEN</code> to <code>CLOSED</code> or from from <code>CLOSED</code> to <code>CLOSED</code>.</p>
     */
    pullRequestStatus: 'OPEN'|'CLOSED'|string;
}