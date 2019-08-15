import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterface: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Ipv4Address: {
      shape: {
        type: "string"
      }
    },
    MacAddress: {
      shape: {
        type: "string"
      }
    },
    Ipv6Address: {
      shape: {
        type: "string"
      }
    }
  }
};
