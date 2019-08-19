import { _UnmarshalledSubscription } from "./_Subscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListEventSubscriptionsOutput shape
 */
export interface ListEventSubscriptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Details of the returned event subscriptions.</p>
   */
  subscriptions: Array<_UnmarshalledSubscription>;

  /**
   * <p> When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
