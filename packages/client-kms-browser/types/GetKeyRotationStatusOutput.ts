import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetKeyRotationStatusOutput shape
 */
export interface GetKeyRotationStatusOutput {
    /**
     * <p>A Boolean value that specifies whether key rotation is enabled.</p>
     */
    KeyRotationEnabled?: boolean;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
