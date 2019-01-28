import {_UnmarshalledEmailChannelResponse} from './_EmailChannelResponse';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * UpdateEmailChannelOutput shape
 */
export interface UpdateEmailChannelOutput {
    /**
     * Email Channel Response.
     */
    EmailChannelResponse: _UnmarshalledEmailChannelResponse;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
