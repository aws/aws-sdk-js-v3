import {_UnmarshalledGCMChannelResponse} from './_GCMChannelResponse';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetGcmChannelOutput shape
 */
export interface GetGcmChannelOutput {
    /**
     * Google Cloud Messaging channel definition
     */
    GCMChannelResponse: _UnmarshalledGCMChannelResponse;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
