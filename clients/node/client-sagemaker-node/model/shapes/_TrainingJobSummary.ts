import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrainingJobSummary: _Structure_ = {
  type: "structure",
  required: [
    "TrainingJobName",
    "TrainingJobArn",
    "CreationTime",
    "TrainingJobStatus"
  ],
  members: {
    TrainingJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TrainingJobArn: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingJobStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
