import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of PurchaseReservedInstancesOffering.</p>
 */
export interface PurchaseReservedInstancesOfferingOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IDs of the purchased Reserved Instances.</p>
   */
  ReservedInstancesId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
