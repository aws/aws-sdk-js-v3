import {_Location} from './_Location';

/**
 * PostCommentForComparedCommitInput shape
 */
export interface PostCommentForComparedCommitInput {
    /**
     * <p>The name of the repository where you want to post a comment on the comparison between commits.</p>
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
     * <p>The location of the comparison where you want to comment.</p>
     */
    location?: _Location;

    /**
     * <p>The content of the comment you want to make.</p>
     */
    content: string;

    /**
     * <p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
     */
    clientRequestToken?: string;
}