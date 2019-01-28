import {_UnmarshalledSMSChannelResponse} from './_SMSChannelResponse';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * UpdateSmsChannelOutput shape
 */
export interface UpdateSmsChannelOutput {
    /**
     * SMS Channel Response.
     */
    SMSChannelResponse: _UnmarshalledSMSChannelResponse;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
