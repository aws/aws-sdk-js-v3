import {
  _TopicConfiguration,
  _UnmarshalledTopicConfiguration
} from "./_TopicConfiguration";
import {
  _QueueConfiguration,
  _UnmarshalledQueueConfiguration
} from "./_QueueConfiguration";
import {
  _LambdaFunctionConfiguration,
  _UnmarshalledLambdaFunctionConfiguration
} from "./_LambdaFunctionConfiguration";

/**
 * <p>A container for specifying the notification configuration of the bucket. If this element is empty, notifications are turned off for the bucket.</p>
 */
export interface _NotificationConfiguration {
  /**
   * <p>The topic to which notifications are sent and the events for which notifications are generated.</p>
   */
  TopicConfigurations?:
    | Array<_TopicConfiguration>
    | Iterable<_TopicConfiguration>;

  /**
   * <p>The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.</p>
   */
  QueueConfigurations?:
    | Array<_QueueConfiguration>
    | Iterable<_QueueConfiguration>;

  /**
   * <p>Describes the AWS Lambda functions to invoke and the events for which to invoke them.</p>
   */
  LambdaFunctionConfigurations?:
    | Array<_LambdaFunctionConfiguration>
    | Iterable<_LambdaFunctionConfiguration>;
}

export interface _UnmarshalledNotificationConfiguration
  extends _NotificationConfiguration {
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
}
