/**
 * PostCommentReplyInput shape
 */
export interface PostCommentReplyInput {
    /**
     * <p>The system-generated ID of the comment to which you want to reply. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.</p>
     */
    inReplyTo: string;

    /**
     * <p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
     */
    clientRequestToken?: string;

    /**
     * <p>The contents of your reply to a comment.</p>
     */
    content: string;
}