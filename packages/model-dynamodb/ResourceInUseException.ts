import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>The operation conflicts with the resource's availability. For example, you attempted to recreate an existing table, or tried to delete a table currently in the <code>CREATING</code> state.</p>
 */
export interface ResourceInUseException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;
    
    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;
    
    /**
     * <p>The resource which is being attempted to be changed is in use.</p>
     */
    message?: string;
    
    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}