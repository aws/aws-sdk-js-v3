import { _UnmarshalledVpcPeeringConnection } from "./_VpcPeeringConnection";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface DescribeVpcPeeringConnectionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Collection of VPC peering connection records that match the request.</p>
   */
  VpcPeeringConnections?: Array<_UnmarshalledVpcPeeringConnection>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
