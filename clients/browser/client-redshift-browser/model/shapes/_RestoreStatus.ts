import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RestoreStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    CurrentRestoreRateInMegaBytesPerSecond: {
      shape: {
        type: "float"
      }
    },
    SnapshotSizeInMegaBytes: {
      shape: {
        type: "integer"
      }
    },
    ProgressInMegaBytes: {
      shape: {
        type: "integer"
      }
    },
    ElapsedTimeInSeconds: {
      shape: {
        type: "integer"
      }
    },
    EstimatedTimeToCompletionInSeconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
