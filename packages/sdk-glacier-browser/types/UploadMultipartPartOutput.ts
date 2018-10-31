import * as __aws_types from '@aws-sdk/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface UploadMultipartPartOutput {
    /**
     * <p>The SHA256 tree hash that Amazon Glacier computed for the uploaded part.</p>
     */
    checksum?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_types.ResponseMetadata;
}
