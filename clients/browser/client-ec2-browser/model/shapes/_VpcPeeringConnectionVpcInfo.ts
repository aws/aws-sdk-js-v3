import { _Ipv6CidrBlockSet } from "./_Ipv6CidrBlockSet";
import { _CidrBlockSet } from "./_CidrBlockSet";
import { _VpcPeeringConnectionOptionsDescription } from "./_VpcPeeringConnectionOptionsDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcPeeringConnectionVpcInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "cidrBlock"
    },
    Ipv6CidrBlockSet: {
      shape: _Ipv6CidrBlockSet,
      locationName: "ipv6CidrBlockSet"
    },
    CidrBlockSet: {
      shape: _CidrBlockSet,
      locationName: "cidrBlockSet"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    PeeringOptions: {
      shape: _VpcPeeringConnectionOptionsDescription,
      locationName: "peeringOptions"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    Region: {
      shape: {
        type: "string"
      },
      locationName: "region"
    }
  }
};
