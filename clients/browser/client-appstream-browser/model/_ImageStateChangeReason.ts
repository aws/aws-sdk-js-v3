import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImageStateChangeReason: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "string"
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
