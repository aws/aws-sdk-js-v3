import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Returned if there is insufficient capacity to process this expedited request. This error only applies to expedited retrievals and not to standard or bulk retrievals.</p>
 */
export interface InsufficientCapacityException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;

    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;

    /**
     * _string shape
     */
    type?: string;

    /**
     * _string shape
     */
    code?: string;

    /**
     * _string shape
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}