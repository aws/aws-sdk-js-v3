import {_UnmarshalledComment} from './_Comment';
import * as __aws_types from '@aws/types';

/**
 * DeleteCommentContentOutput shape
 */
export interface DeleteCommentContentOutput {
    /**
     * <p>Information about the comment you just deleted.</p>
     */
    comment?: _UnmarshalledComment;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
