import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Represents the output of a get blob operation.</p>
 */
export interface GetBlobOutput {
    /**
     * <p>The content of the blob, usually a file.</p>
     */
    content: Uint8Array;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}