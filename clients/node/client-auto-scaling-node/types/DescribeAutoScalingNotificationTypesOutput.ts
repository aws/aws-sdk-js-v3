import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAutoScalingNotificationTypesOutput shape
 */
export interface DescribeAutoScalingNotificationTypesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The notification types.</p>
   */
  AutoScalingNotificationTypes?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
