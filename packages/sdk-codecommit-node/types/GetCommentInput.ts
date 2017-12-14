/**
 * GetCommentInput shape
 */
export interface GetCommentInput {
    /**
     * <p>The unique, system-generated ID of the comment. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.</p>
     */
    commentId: string;
}