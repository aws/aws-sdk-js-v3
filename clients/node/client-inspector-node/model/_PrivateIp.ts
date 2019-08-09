import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PrivateIp: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    privateDnsName: {
      shape: {
        type: "string"
      }
    },
    privateIpAddress: {
      shape: {
        type: "string"
      }
    }
  }
};
