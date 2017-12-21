import {_UnmarshalledCommentsForComparedCommit} from './_CommentsForComparedCommit';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

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
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}