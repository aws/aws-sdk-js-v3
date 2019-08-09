import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceLimits: _Structure_ = {
  type: "structure",
  required: ["MaxNumberOfTrainingJobs", "MaxParallelTrainingJobs"],
  members: {
    MaxNumberOfTrainingJobs: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MaxParallelTrainingJobs: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
