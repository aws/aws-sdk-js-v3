import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>The operation tried to access a nonexistent table or index. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
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
     * <p>The resource which is being requested does not exist.</p>
     */
    message?: string;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}