import {_UnmarshalledRepositoryNameIdPair} from './_RepositoryNameIdPair';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Represents the output of a list repositories operation.</p>
 */
export interface ListRepositoriesOutput {
    /**
     * <p>Lists the repositories called by the list repositories operation.</p>
     */
    repositories?: Array<_UnmarshalledRepositoryNameIdPair>;

    /**
     * <p>An enumeration token that allows the operation to batch the results of the operation. Batch sizes are 1,000 for list repository operations. When the client sends the token back to AWS CodeCommit, another page of 1,000 records is retrieved.</p>
     */
    nextToken?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
