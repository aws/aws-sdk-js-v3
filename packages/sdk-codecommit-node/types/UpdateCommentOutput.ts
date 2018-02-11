import {_UnmarshalledComment} from './_Comment';
import * as __aws_types from '@aws/types';

/**
 * UpdateCommentOutput shape
 */
export interface UpdateCommentOutput {
    /**
     * <p>Information about the updated comment.</p>
     */
    comment?: _UnmarshalledComment;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
