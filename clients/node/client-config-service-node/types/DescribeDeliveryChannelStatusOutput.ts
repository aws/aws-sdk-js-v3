import { _UnmarshalledDeliveryChannelStatus } from "./_DeliveryChannelStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>DescribeDeliveryChannelStatus</a> action.</p>
 */
export interface DescribeDeliveryChannelStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains the status of a specified delivery channel.</p>
   */
  DeliveryChannelsStatus?: Array<_UnmarshalledDeliveryChannelStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
