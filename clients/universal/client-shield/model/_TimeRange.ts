import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimeRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FromInclusive: {
      shape: {
        type: "timestamp"
      }
    },
    ToExclusive: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
