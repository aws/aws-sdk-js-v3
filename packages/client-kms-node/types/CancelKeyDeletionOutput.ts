import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * CancelKeyDeletionOutput shape
 */
export interface CancelKeyDeletionOutput {
    /**
     * <p>The unique identifier of the master key for which deletion is canceled.</p>
     */
    KeyId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
