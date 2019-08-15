import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimestampRange: _Structure_ = {
  type: "structure",
  required: ["StartTimestamp", "EndTimestamp"],
  members: {
    StartTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    EndTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
