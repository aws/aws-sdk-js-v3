import {_UnmarshalledLocation} from './_Location';
import {_UnmarshalledComment} from './_Comment';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * PostCommentForComparedCommitOutput shape
 */
export interface PostCommentForComparedCommitOutput {
    /**
     * <p>The name of the repository where you posted a comment on the comparison between commits.</p>
     */
    repositoryName?: string;

    /**
     * <p>In the directionality you established, the full commit ID of the 'before' commit.</p>
     */
    beforeCommitId?: string;

    /**
     * <p>In the directionality you established, the full commit ID of the 'after' commit.</p>
     */
    afterCommitId?: string;

    /**
     * <p>In the directionality you established, the blob ID of the 'before' blob.</p>
     */
    beforeBlobId?: string;

    /**
     * <p>In the directionality you established, the blob ID of the 'after' blob.</p>
     */
    afterBlobId?: string;

    /**
     * <p>The location of the comment in the comparison between the two commits.</p>
     */
    location?: _UnmarshalledLocation;

    /**
     * <p>The content of the comment you posted.</p>
     */
    comment?: _UnmarshalledComment;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
