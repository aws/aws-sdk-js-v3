import { _UnmarshalledSubnetIpv6CidrBlockAssociation } from "./_SubnetIpv6CidrBlockAssociation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisassociateSubnetCidrBlockOutput shape
 */
export interface DisassociateSubnetCidrBlockOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the IPv6 CIDR block association.</p>
   */
  Ipv6CidrBlockAssociation?: _UnmarshalledSubnetIpv6CidrBlockAssociation;

  /**
   * <p>The ID of the subnet.</p>
   */
  SubnetId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
