import { _UnmarshalledDeliveryStreamDescription } from "./_DeliveryStreamDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDeliveryStreamOutput shape
 */
export interface DescribeDeliveryStreamOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the delivery stream.</p>
   */
  DeliveryStreamDescription: _UnmarshalledDeliveryStreamDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
