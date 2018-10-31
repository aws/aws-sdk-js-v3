import {_UnmarshalledVaultAccessPolicy} from './_VaultAccessPolicy';
import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Output for GetVaultAccessPolicy.</p>
 */
export interface GetVaultAccessPolicyOutput {
    /**
     * <p>Contains the returned vault access policy as a JSON string.</p>
     */
    policy?: _UnmarshalledVaultAccessPolicy;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
