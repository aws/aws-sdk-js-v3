import {_UnmarshalledRule} from './_Rule';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetBucketLifecycleOutput shape
 */
export interface GetBucketLifecycleOutput {
    /**
     * _Rules shape
     */
    Rules?: Array<_UnmarshalledRule>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
