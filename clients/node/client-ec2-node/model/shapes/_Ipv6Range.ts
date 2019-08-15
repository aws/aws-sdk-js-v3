import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Ipv6Range: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CidrIpv6: {
      shape: {
        type: "string"
      },
      locationName: "cidrIpv6"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    }
  }
};
