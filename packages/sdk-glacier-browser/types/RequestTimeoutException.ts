import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Returned if, when uploading an archive, Amazon Glacier times out while receiving the upload.</p>
 */
export interface RequestTimeoutException {
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
     * <p>408 Request Timeout</p>
     */
    code?: string;

    /**
     * <p>Returned if, when uploading an archive, Amazon Glacier times out while receiving the upload.</p>
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}