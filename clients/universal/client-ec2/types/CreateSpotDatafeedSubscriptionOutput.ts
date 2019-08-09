import { _UnmarshalledSpotDatafeedSubscription } from "./_SpotDatafeedSubscription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CreateSpotDatafeedSubscription.</p>
 */
export interface CreateSpotDatafeedSubscriptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Spot Instance data feed subscription.</p>
   */
  SpotDatafeedSubscription?: _UnmarshalledSpotDatafeedSubscription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
