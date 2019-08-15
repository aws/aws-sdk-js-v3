import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CidrIp: {
      shape: {
        type: "string"
      },
      locationName: "cidrIp"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    }
  }
};
