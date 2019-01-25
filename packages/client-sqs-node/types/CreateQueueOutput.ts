import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Returns the <code>QueueUrl</code> attribute of the created queue.</p>
 */
export interface CreateQueueOutput {
    /**
     * <p>The URL of the created Amazon SQS queue.</p>
     */
    QueueUrl?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
