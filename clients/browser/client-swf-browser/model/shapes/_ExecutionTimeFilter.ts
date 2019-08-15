import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExecutionTimeFilter: _Structure_ = {
  type: "structure",
  required: ["oldestDate"],
  members: {
    oldestDate: {
      shape: {
        type: "timestamp"
      }
    },
    latestDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
