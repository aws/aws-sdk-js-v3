import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response for ConfirmSubscriptions action.</p>
 */
export interface ConfirmSubscriptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the created subscription.</p>
   */
  SubscriptionArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
