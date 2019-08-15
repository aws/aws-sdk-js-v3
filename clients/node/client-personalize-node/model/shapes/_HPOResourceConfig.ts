import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HPOResourceConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    maxNumberOfTrainingJobs: {
      shape: {
        type: "string"
      }
    },
    maxParallelTrainingJobs: {
      shape: {
        type: "string"
      }
    }
  }
};
