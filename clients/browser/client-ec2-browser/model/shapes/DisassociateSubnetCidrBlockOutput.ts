import { _SubnetIpv6CidrBlockAssociation } from "./_SubnetIpv6CidrBlockAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateSubnetCidrBlockOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Ipv6CidrBlockAssociation: {
      shape: _SubnetIpv6CidrBlockAssociation,
      locationName: "ipv6CidrBlockAssociation"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    }
  }
};
