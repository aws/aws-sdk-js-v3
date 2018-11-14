import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Upon success, it returns empty response. Otherwise, throws an exception.</p>
 */
export interface InvokeAsyncOutput {
    /**
     * <p>It will be 202 upon success.</p>
     */
    Status?: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
