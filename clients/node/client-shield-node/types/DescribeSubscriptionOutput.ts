import { _UnmarshalledSubscription } from "./_Subscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSubscriptionOutput shape
 */
export interface DescribeSubscriptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The AWS Shield Advanced subscription details for an account.</p>
   */
  Subscription?: _UnmarshalledSubscription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
