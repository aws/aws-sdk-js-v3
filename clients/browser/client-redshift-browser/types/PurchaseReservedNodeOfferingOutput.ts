import { _UnmarshalledReservedNode } from "./_ReservedNode";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PurchaseReservedNodeOfferingOutput shape
 */
export interface PurchaseReservedNodeOfferingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes a reserved node. You can call the <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved node offerings. </p>
   */
  ReservedNode?: _UnmarshalledReservedNode;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
