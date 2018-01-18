import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface CreateVaultOutput {
    /**
     * <p>The URI of the vault that was created.</p>
     */
    location?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}