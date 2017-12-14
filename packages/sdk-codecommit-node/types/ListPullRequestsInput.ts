/**
 * ListPullRequestsInput shape
 */
export interface ListPullRequestsInput {
    /**
     * <p>The name of the repository for which you want to list pull requests.</p>
     */
    repositoryName: string;

    /**
     * <p>Optional. The Amazon Resource Name (ARN) of the user who created the pull request. If used, this filters the results to pull requests created by that user.</p>
     */
    authorArn?: string;

    /**
     * <p>Optional. The status of the pull request. If used, this refines the results to the pull requests that match the specified status.</p>
     */
    pullRequestStatus?: 'OPEN'|'CLOSED'|string;

    /**
     * <p>An enumeration token that when provided in a request, returns the next batch of the results.</p>
     */
    nextToken?: string;

    /**
     * <p>A non-negative integer used to limit the number of returned results.</p>
     */
    maxResults?: number;
}