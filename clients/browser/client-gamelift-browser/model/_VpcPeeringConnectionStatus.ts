import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcPeeringConnectionStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
