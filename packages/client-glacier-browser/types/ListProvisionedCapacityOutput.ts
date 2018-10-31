import {_UnmarshalledProvisionedCapacityDescription} from './_ProvisionedCapacityDescription';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ListProvisionedCapacityOutput shape
 */
export interface ListProvisionedCapacityOutput {
    /**
     * <p>The response body contains the following JSON fields.</p>
     */
    ProvisionedCapacityList?: Array<_UnmarshalledProvisionedCapacityDescription>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
