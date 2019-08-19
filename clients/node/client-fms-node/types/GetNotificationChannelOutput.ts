import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetNotificationChannelOutput shape
 */
export interface GetNotificationChannelOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The SNS topic that records AWS Firewall Manager activity. </p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The IAM role that is used by AWS Firewall Manager to record activity to SNS.</p>
   */
  SnsRoleName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
