import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpAddressUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IpId: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
