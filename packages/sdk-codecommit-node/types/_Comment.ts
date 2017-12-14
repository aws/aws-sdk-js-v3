/**
 * <p>Returns information about a specific comment.</p>
 */
export interface _Comment {
    /**
     * <p>The system-generated comment ID.</p>
     */
    commentId?: string;

    /**
     * <p>The content of the comment.</p>
     */
    content?: string;

    /**
     * <p>The ID of the comment for which this comment is a reply, if any.</p>
     */
    inReplyTo?: string;

    /**
     * <p>The date and time the comment was created, in timestamp format.</p>
     */
    creationDate?: Date|string|number;

    /**
     * <p>The date and time the comment was most recently modified, in timestamp format.</p>
     */
    lastModifiedDate?: Date|string|number;

    /**
     * <p>The Amazon Resource Name (ARN) of the person who posted the comment.</p>
     */
    authorArn?: string;

    /**
     * <p>A Boolean value indicating whether the comment has been deleted.</p>
     */
    deleted?: boolean;

    /**
     * <p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p>
     */
    clientRequestToken?: string;
}

export interface _UnmarshalledComment extends _Comment {
    /**
     * <p>The date and time the comment was created, in timestamp format.</p>
     */
    creationDate?: Date;

    /**
     * <p>The date and time the comment was most recently modified, in timestamp format.</p>
     */
    lastModifiedDate?: Date;
}