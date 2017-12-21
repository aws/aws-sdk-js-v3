import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.</p>
 */
export interface BeforeCommitIdAndAfterCommitIdAreSameException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;

    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;

    /**
     * <p>Human-readable description of the error.</p>
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}