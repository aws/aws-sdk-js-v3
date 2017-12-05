import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the output of a delete repository operation.</p>
 */
export interface DeleteRepositoryOutput {
    /**
     * <p>The ID of the repository that was deleted.</p>
     */
    repositoryId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}