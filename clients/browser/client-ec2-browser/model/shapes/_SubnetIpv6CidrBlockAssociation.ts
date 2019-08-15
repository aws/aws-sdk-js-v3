import { _SubnetCidrBlockState } from "./_SubnetCidrBlockState";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SubnetIpv6CidrBlockAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      },
      locationName: "associationId"
    },
    Ipv6CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "ipv6CidrBlock"
    },
    Ipv6CidrBlockState: {
      shape: _SubnetCidrBlockState,
      locationName: "ipv6CidrBlockState"
    }
  }
};
