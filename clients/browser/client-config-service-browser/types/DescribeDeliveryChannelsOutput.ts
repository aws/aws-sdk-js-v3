import { _UnmarshalledDeliveryChannel } from "./_DeliveryChannel";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>DescribeDeliveryChannels</a> action.</p>
 */
export interface DescribeDeliveryChannelsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list that contains the descriptions of the specified delivery channel.</p>
   */
  DeliveryChannels?: Array<_UnmarshalledDeliveryChannel>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
