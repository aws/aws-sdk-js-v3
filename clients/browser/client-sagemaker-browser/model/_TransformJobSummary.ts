import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransformJobSummary: _Structure_ = {
  type: "structure",
  required: [
    "TransformJobName",
    "TransformJobArn",
    "CreationTime",
    "TransformJobStatus"
  ],
  members: {
    TransformJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TransformJobArn: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TransformEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    TransformJobStatus: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    }
  }
};
