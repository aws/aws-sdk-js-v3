import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateVpcCidrBlockInput: _Structure_ = {
  type: "structure",
  required: ["VpcId"],
  members: {
    AmazonProvidedIpv6CidrBlock: {
      shape: {
        type: "boolean"
      },
      locationName: "amazonProvidedIpv6CidrBlock"
    },
    CidrBlock: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
