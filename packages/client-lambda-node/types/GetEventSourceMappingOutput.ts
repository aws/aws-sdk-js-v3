import * as __aws_sdk_types from '@aws-sdk/types';

/**
 * <p>Describes mapping between an Amazon Kinesis or DynamoDB stream and a Lambda function.</p>
 */
export interface GetEventSourceMappingOutput {
    /**
     * <p>The AWS Lambda assigned opaque identifier for the mapping.</p>
     */
    UUID?: string;

    /**
     * <p>The largest number of records that AWS Lambda will retrieve from your event source at the time of invoking your function. Your function receives an event with all the retrieved records.</p>
     */
    BatchSize?: number;

    /**
     * <p>The Amazon Resource Name (ARN) of the Amazon Kinesis or DynamoDB stream that is the source of events.</p>
     */
    EventSourceArn?: string;

    /**
     * <p>The Lambda function to invoke when AWS Lambda detects an event on the poll-based source.</p>
     */
    FunctionArn?: string;

    /**
     * <p>The UTC time string indicating the last time the event mapping was updated.</p>
     */
    LastModified?: Date;

    /**
     * <p>The result of the last AWS Lambda invocation of your Lambda function. This value will be null if an SQS queue is the event source.</p>
     */
    LastProcessingResult?: string;

    /**
     * <p>The state of the event source mapping. It can be <code>Creating</code>, <code>Enabled</code>, <code>Disabled</code>, <code>Enabling</code>, <code>Disabling</code>, <code>Updating</code>, or <code>Deleting</code>.</p>
     */
    State?: string;

    /**
     * <p>The reason the event source mapping is in its current state. It is either user-requested or an AWS Lambda-initiated state transition.</p>
     */
    StateTransitionReason?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __aws_sdk_types.ResponseMetadata;
}
