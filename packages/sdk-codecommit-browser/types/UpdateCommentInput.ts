/**
 * UpdateCommentInput shape
 */
export interface UpdateCommentInput {
    /**
     * <p>The system-generated ID of the comment you want to update. To get this ID, use <a>GetCommentsForComparedCommit</a> or <a>GetCommentsForPullRequest</a>.</p>
     */
    commentId: string;

    /**
     * <p>The updated content with which you want to replace the existing content of the comment.</p>
     */
    content: string;
}