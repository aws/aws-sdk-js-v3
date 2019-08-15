import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Range: _Structure_ = {
  type: "structure",
  required: ["StartTime", "EndTime"],
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
