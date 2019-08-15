import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimePeriod: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Start: {
      shape: {
        type: "timestamp"
      }
    },
    End: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
