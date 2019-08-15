import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KeyPhrasesDetectionJobFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobStatus: {
      shape: {
        type: "string"
      }
    },
    SubmitTimeBefore: {
      shape: {
        type: "timestamp"
      }
    },
    SubmitTimeAfter: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
