import {_UnmarshalledRepositoryMetadata} from './_RepositoryMetadata';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Represents the output of a get repository operation.</p>
 */
export interface GetRepositoryOutput {
    /**
     * <p>Information about the repository.</p>
     */
    repositoryMetadata?: _UnmarshalledRepositoryMetadata;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
