import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetHealth: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    Reason: {
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
