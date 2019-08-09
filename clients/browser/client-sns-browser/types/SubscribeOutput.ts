import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response for Subscribe action.</p>
 */
export interface SubscribeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the subscription if it is confirmed, or the string "pending confirmation" if the subscription requires confirmation. However, if the API request parameter <code>ReturnSubscriptionArn</code> is true, then the value is always the subscription ARN, even if the subscription requires confirmation.</p>
   */
  SubscriptionArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
