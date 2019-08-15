import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateSubnetCidrBlockInput: _Structure_ = {
  type: "structure",
  required: ["Ipv6CidrBlock", "SubnetId"],
  members: {
    Ipv6CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "ipv6CidrBlock"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "subnetId"
    }
  }
};
