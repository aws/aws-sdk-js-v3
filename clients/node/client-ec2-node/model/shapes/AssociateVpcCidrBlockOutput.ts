import { _VpcIpv6CidrBlockAssociation } from "./_VpcIpv6CidrBlockAssociation";
import { _VpcCidrBlockAssociation } from "./_VpcCidrBlockAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateVpcCidrBlockOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Ipv6CidrBlockAssociation: {
      shape: _VpcIpv6CidrBlockAssociation,
      locationName: "ipv6CidrBlockAssociation"
    },
    CidrBlockAssociation: {
      shape: _VpcCidrBlockAssociation,
      locationName: "cidrBlockAssociation"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
