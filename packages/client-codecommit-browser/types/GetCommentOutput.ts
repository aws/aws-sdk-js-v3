import {_UnmarshalledComment} from './_Comment';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetCommentOutput shape
 */
export interface GetCommentOutput {
    /**
     * <p>The contents of the comment.</p>
     */
    comment?: _UnmarshalledComment;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
