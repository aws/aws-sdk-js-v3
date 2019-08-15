import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VmServerAddress: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    vmManagerId: {
      shape: {
        type: "string"
      }
    },
    vmId: {
      shape: {
        type: "string"
      }
    }
  }
};
