import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GenerateRandomOutput shape
 */
export interface GenerateRandomOutput {
    /**
     * <p>The random byte string. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not encoded.</p>
     */
    Plaintext?: Uint8Array;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
