import {_UnmarshalledAPNSChannelResponse} from './_APNSChannelResponse';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * DeleteApnsChannelOutput shape
 */
export interface DeleteApnsChannelOutput {
    /**
     * Apple Distribution Push Notification Service channel definition.
     */
    APNSChannelResponse: _UnmarshalledAPNSChannelResponse;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
