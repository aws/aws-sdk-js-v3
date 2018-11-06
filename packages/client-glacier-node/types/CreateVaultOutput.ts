import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface CreateVaultOutput {
    /**
     * <p>The URI of the vault that was created.</p>
     */
    location?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
