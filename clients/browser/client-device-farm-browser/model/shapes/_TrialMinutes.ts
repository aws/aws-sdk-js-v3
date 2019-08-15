import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrialMinutes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    total: {
      shape: {
        type: "float"
      }
    },
    remaining: {
      shape: {
        type: "float"
      }
    }
  }
};
