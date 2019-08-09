import { _UnmarshalledSubscription } from "./_Subscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeNotificationSubscriptionsOutput shape
 */
export interface DescribeNotificationSubscriptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The subscriptions.</p>
   */
  Subscriptions?: Array<_UnmarshalledSubscription>;

  /**
   * <p>The marker to use when requesting the next set of results. If there are no additional results, the string is empty.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
