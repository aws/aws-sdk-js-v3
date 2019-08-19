import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DateTimeRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    from: {
      shape: {
        type: "timestamp"
      }
    },
    to: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
