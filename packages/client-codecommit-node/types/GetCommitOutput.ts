import {_UnmarshalledCommit} from './_Commit';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Represents the output of a get commit operation.</p>
 */
export interface GetCommitOutput {
    /**
     * <p>A commit data type object that contains information about the specified commit.</p>
     */
    commit: _UnmarshalledCommit;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
