import { _UnmarshalledVpcIpv6CidrBlockAssociation } from "./_VpcIpv6CidrBlockAssociation";
import { _UnmarshalledVpcCidrBlockAssociation } from "./_VpcCidrBlockAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AssociateVpcCidrBlockOutput shape
 */
export interface AssociateVpcCidrBlockOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: _UnmarshalledVpcIpv6CidrBlockAssociation;

  /**
   * <p>Information about the IPv4 CIDR block association.</p>
   */
  CidrBlockAssociation?: _UnmarshalledVpcCidrBlockAssociation;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
