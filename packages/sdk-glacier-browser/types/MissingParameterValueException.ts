import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Returned if a required header or parameter is missing from the request.</p>
 */
export interface MissingParameterValueException {
    /**
     * <p>A trace of which functions were called leading to this error being raised.</p>
     */
    stack?: string;

    /**
     * <p>The species of error returned by the service.</p>
     */
    name?: string;

    /**
     * <p>Client.</p>
     */
    type?: string;

    /**
     * <p>400 Bad Request</p>
     */
    code?: string;

    /**
     * <p>Returned if no authentication data is found for the request.</p>
     */
    message?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}