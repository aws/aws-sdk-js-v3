import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DASHTimestampRange: _Structure_ = {
  type: "structure",
  required: [],
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
