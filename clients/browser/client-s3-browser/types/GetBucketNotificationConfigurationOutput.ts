import { _UnmarshalledTopicConfiguration } from "./_TopicConfiguration";
import { _UnmarshalledQueueConfiguration } from "./_QueueConfiguration";
import { _UnmarshalledLambdaFunctionConfiguration } from "./_LambdaFunctionConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.</p>
 */
export interface GetBucketNotificationConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The topic to which notifications are sent and the events for which notifications are generated.</p>
   */
  TopicConfigurations?: Array<_UnmarshalledTopicConfiguration>;

  /**
   * <p>The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.</p>
   */
  QueueConfigurations?: Array<_UnmarshalledQueueConfiguration>;

  /**
   * <p>Describes the AWS Lambda functions to invoke and the events for which to invoke them.</p>
   */
  LambdaFunctionConfigurations?: Array<
    _UnmarshalledLambdaFunctionConfiguration
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
