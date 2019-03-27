import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * ReEncryptOutput shape
 */
export interface ReEncryptOutput {
    /**
     * <p>The reencrypted data. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not encoded.</p>
     */
    CiphertextBlob?: Uint8Array;

    /**
     * <p>Unique identifier of the CMK used to originally encrypt the data.</p>
     */
    SourceKeyId?: string;

    /**
     * <p>Unique identifier of the CMK used to reencrypt the data.</p>
     */
    KeyId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
