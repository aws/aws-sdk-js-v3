import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>An error occurred on the server side.</p>
 */
export interface InternalServerError {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;
    
    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;
    
    /**
     * <p>The server encountered an internal error trying to fulfill the request.</p>
     */
    message?: string;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}