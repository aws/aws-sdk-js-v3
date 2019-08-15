import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackDriftDetectionStatusOutput: _Structure_ = {
  type: "structure",
  required: [
    "StackId",
    "StackDriftDetectionId",
    "DetectionStatus",
    "Timestamp"
  ],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    StackDriftDetectionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackDriftStatus: {
      shape: {
        type: "string"
      }
    },
    DetectionStatus: {
      shape: {
        type: "string"
      }
    },
    DetectionStatusReason: {
      shape: {
        type: "string"
      }
    },
    DriftedStackResourceCount: {
      shape: {
        type: "integer"
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
