import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PointInTimeRecoveryDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PointInTimeRecoveryStatus: {
      shape: {
        type: "string"
      }
    },
    EarliestRestorableDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    LatestRestorableDateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
