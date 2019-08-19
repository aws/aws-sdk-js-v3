import { _UnmarshalledPeeringConnectionOptions } from "./_PeeringConnectionOptions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyVpcPeeringConnectionOptionsOutput shape
 */
export interface ModifyVpcPeeringConnectionOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the VPC peering connection options for the accepter VPC.</p>
   */
  AccepterPeeringConnectionOptions?: _UnmarshalledPeeringConnectionOptions;

  /**
   * <p>Information about the VPC peering connection options for the requester VPC.</p>
   */
  RequesterPeeringConnectionOptions?: _UnmarshalledPeeringConnectionOptions;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
