import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * DecryptOutput shape
 */
export interface DecryptOutput {
    /**
     * <p>ARN of the key used to perform the decryption. This value is returned if no errors are encountered during the operation.</p>
     */
    KeyId?: string;

    /**
     * <p>Decrypted plaintext data. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not encoded.</p>
     */
    Plaintext?: Uint8Array;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
