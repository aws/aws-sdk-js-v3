import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimeRangeFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
