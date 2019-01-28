import {_UnmarshalledEndpointsResponse} from './_EndpointsResponse';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * DeleteUserEndpointsOutput shape
 */
export interface DeleteUserEndpointsOutput {
    /**
     * List of endpoints
     */
    EndpointsResponse: _UnmarshalledEndpointsResponse;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
