import {_UnmarshalledOwner} from './_Owner';
import {_UnmarshalledGrant} from './_Grant';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetBucketAclOutput shape
 */
export interface GetBucketAclOutput {
    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;

    /**
     * <p>A list of grants.</p>
     */
    Grants?: Array<_UnmarshalledGrant>;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
