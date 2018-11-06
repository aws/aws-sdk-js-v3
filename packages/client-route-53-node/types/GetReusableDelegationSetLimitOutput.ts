import {_UnmarshalledReusableDelegationSetLimit} from './_ReusableDelegationSetLimit';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetReusableDelegationSetLimitOutput {
    /**
     * <p>The current setting for the limit on hosted zones that you can associate with the specified reusable delegation set.</p>
     */
    Limit: _UnmarshalledReusableDelegationSetLimit;

    /**
     * <p>The current number of hosted zones that you can associate with the specified reusable delegation set.</p>
     */
    Count: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
