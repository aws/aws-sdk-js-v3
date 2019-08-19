import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataTransferProgress: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    CurrentRateInMegaBytesPerSecond: {
      shape: {
        type: "float"
      }
    },
    TotalDataInMegaBytes: {
      shape: {
        type: "integer"
      }
    },
    DataTransferredInMegaBytes: {
      shape: {
        type: "integer"
      }
    },
    EstimatedTimeToCompletionInSeconds: {
      shape: {
        type: "integer"
      }
    },
    ElapsedTimeInSeconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
