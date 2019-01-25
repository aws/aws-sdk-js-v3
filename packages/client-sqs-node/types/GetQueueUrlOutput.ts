import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>For more information, see <a href="http://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html">Interpreting Responses</a> in the <i>Amazon Simple Queue Service Developer Guide</i>.</p>
 */
export interface GetQueueUrlOutput {
    /**
     * <p>The URL of the queue.</p>
     */
    QueueUrl?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
