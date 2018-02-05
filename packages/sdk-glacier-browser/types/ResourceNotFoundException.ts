import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
 */
export interface ResourceNotFoundException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;

    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;

    /**
     * <p>Client</p>
     */
    type?: string;

    /**
     * <p>404 Not Found</p>
     */
    code?: string;

    /**
     * <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.</p>
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}