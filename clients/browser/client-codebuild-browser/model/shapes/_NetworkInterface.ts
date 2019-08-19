import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkInterface: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    subnetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    networkInterfaceId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
