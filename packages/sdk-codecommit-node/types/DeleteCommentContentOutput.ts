import {_UnmarshalledComment} from './_Comment';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * DeleteCommentContentOutput shape
 */
export interface DeleteCommentContentOutput {
    /**
     * <p>Information about the comment you just deleted.</p>
     */
    comment?: _UnmarshalledComment;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}