import {_UnmarshalledNumberValidateResponse} from './_NumberValidateResponse';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * PhoneNumberValidateOutput shape
 */
export interface PhoneNumberValidateOutput {
    /**
     * Phone Number Validate response.
     */
    NumberValidateResponse: _UnmarshalledNumberValidateResponse;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
