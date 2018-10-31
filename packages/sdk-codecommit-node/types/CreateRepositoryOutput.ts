import {_UnmarshalledRepositoryMetadata} from './_RepositoryMetadata';
import * as __aws_types from '@aws-sdk/types';

/**
 * <p>Represents the output of a create repository operation.</p>
 */
export interface CreateRepositoryOutput {
    /**
     * <p>Information about the newly created repository.</p>
     */
    repositoryMetadata?: _UnmarshalledRepositoryMetadata;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
