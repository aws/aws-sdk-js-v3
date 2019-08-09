import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSubscriptionStateOutput shape
 */
export interface GetSubscriptionStateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the subscription.</p>
   */
  SubscriptionState: "ACTIVE" | "INACTIVE" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
