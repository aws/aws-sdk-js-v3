import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * GetBucketPolicyOutput shape
 */
export interface GetBucketPolicyOutput {
    /**
     * <p>The bucket policy as a JSON document.</p>
     */
    Policy?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
