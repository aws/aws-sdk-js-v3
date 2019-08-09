import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetIpAddressTypeInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerArn", "IpAddressType"],
  members: {
    LoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    IpAddressType: {
      shape: {
        type: "string"
      }
    }
  }
};
