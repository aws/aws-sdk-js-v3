import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpRoute: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CidrIp: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
