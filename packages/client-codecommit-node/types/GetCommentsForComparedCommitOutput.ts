import {_UnmarshalledCommentsForComparedCommit} from './_CommentsForComparedCommit';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetCommentsForComparedCommitOutput shape
 */
export interface GetCommentsForComparedCommitOutput {
    /**
     * <p>A list of comment objects on the compared commit.</p>
     */
    commentsForComparedCommitData?: Array<_UnmarshalledCommentsForComparedCommit>;

    /**
     * <p>An enumeration token that can be used in a request to return the next batch of the results.</p>
     */
    nextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
