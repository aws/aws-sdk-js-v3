import { _UnmarshalledVpcPeeringConnection } from "./_VpcPeeringConnection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AcceptVpcPeeringConnectionOutput shape
 */
export interface AcceptVpcPeeringConnectionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the VPC peering connection.</p>
   */
  VpcPeeringConnection?: _UnmarshalledVpcPeeringConnection;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
