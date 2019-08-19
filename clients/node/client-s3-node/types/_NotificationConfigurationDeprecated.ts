import {
  _TopicConfigurationDeprecated,
  _UnmarshalledTopicConfigurationDeprecated
} from "./_TopicConfigurationDeprecated";
import {
  _QueueConfigurationDeprecated,
  _UnmarshalledQueueConfigurationDeprecated
} from "./_QueueConfigurationDeprecated";
import {
  _CloudFunctionConfiguration,
  _UnmarshalledCloudFunctionConfiguration
} from "./_CloudFunctionConfiguration";

/**
 * _NotificationConfigurationDeprecated shape
 */
export interface _NotificationConfigurationDeprecated {
  /**
   * <p/>
   */
  TopicConfiguration?: _TopicConfigurationDeprecated;

  /**
   * <p/>
   */
  QueueConfiguration?: _QueueConfigurationDeprecated;

  /**
   * <p/>
   */
  CloudFunctionConfiguration?: _CloudFunctionConfiguration;
}

export interface _UnmarshalledNotificationConfigurationDeprecated
  extends _NotificationConfigurationDeprecated {
  /**
   * <p/>
   */
  TopicConfiguration?: _UnmarshalledTopicConfigurationDeprecated;

  /**
   * <p/>
   */
  QueueConfiguration?: _UnmarshalledQueueConfigurationDeprecated;

  /**
   * <p/>
   */
  CloudFunctionConfiguration?: _UnmarshalledCloudFunctionConfiguration;
}
