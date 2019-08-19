import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LifecyclePolicySummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyId: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    }
  }
};
