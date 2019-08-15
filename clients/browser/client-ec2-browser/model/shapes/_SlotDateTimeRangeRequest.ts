import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SlotDateTimeRangeRequest: _Structure_ = {
  type: "structure",
  required: ["EarliestTime", "LatestTime"],
  members: {
    EarliestTime: {
      shape: {
        type: "timestamp"
      }
    },
    LatestTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
