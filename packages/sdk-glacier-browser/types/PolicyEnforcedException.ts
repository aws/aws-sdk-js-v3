import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Returned if a retrieval job would exceed the current data policy's retrieval rate limit. For more information about data retrieval policies,</p>
 */
export interface PolicyEnforcedException {
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
     * <p>PolicyEnforcedException</p>
     */
    code?: string;

    /**
     * <p>InitiateJob request denied by current data retrieval policy.</p>
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}