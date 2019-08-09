import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimeRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    start: {
      shape: {
        type: "timestamp"
      }
    },
    end: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
