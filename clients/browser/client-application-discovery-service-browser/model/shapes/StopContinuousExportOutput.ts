import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopContinuousExportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    stopTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
