import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpAddressRequest: _Structure_ = {
  type: "structure",
  required: ["SubnetId"],
  members: {
    SubnetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Ip: {
      shape: {
        type: "string",
        min: 7
      }
    }
  }
};
