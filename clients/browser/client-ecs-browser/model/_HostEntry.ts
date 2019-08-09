import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HostEntry: _Structure_ = {
  type: "structure",
  required: ["hostname", "ipAddress"],
  members: {
    hostname: {
      shape: {
        type: "string"
      }
    },
    ipAddress: {
      shape: {
        type: "string"
      }
    }
  }
};
