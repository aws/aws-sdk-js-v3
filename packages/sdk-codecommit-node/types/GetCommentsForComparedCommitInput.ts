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
}