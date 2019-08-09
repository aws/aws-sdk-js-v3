import { _UnmarshalledSubscription } from "./_Subscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Response for ListSubscriptionsByTopic action.</p>
 */
export interface ListSubscriptionsByTopicOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of subscriptions.</p>
   */
  Subscriptions?: Array<_UnmarshalledSubscription>;

  /**
   * <p>Token to pass along to the next <code>ListSubscriptionsByTopic</code> request. This element is returned if there are more subscriptions to retrieve.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
