import { _UnmarshalledTopicConfigurationDeprecated } from "./_TopicConfigurationDeprecated";
import { _UnmarshalledQueueConfigurationDeprecated } from "./_QueueConfigurationDeprecated";
import { _UnmarshalledCloudFunctionConfiguration } from "./_CloudFunctionConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetBucketNotificationOutput shape
 */
export interface GetBucketNotificationOutput
  extends __aws_sdk_types.MetadataBearer {
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

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
