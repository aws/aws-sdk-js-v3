import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartTopicsDetectionJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
