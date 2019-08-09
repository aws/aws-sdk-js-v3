import { _UnmarshalledReservedInstancesListing } from "./_ReservedInstancesListing";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeReservedInstancesListings.</p>
 */
export interface DescribeReservedInstancesListingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Reserved Instance listing.</p>
   */
  ReservedInstancesListings?: Array<_UnmarshalledReservedInstancesListing>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
