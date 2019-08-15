import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterface: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    attachmentId: {
      shape: {
        type: "string"
      }
    },
    privateIpv4Address: {
      shape: {
        type: "string"
      }
    },
    ipv6Address: {
      shape: {
        type: "string"
      }
    }
  }
};
