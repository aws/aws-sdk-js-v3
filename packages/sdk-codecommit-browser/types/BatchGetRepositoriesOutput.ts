import {_UnmarshalledRepositoryMetadata} from './_RepositoryMetadata';
import * as __aws_types from '@aws/types';

/**
 * <p>Represents the output of a batch get repositories operation.</p>
 */
export interface BatchGetRepositoriesOutput {
    /**
     * <p>A list of repositories returned by the batch get repositories operation.</p>
     */
    repositories?: Array<_UnmarshalledRepositoryMetadata>;

    /**
     * <p>Returns a list of repository names for which information could not be found.</p>
     */
    repositoriesNotFound?: Array<string>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
