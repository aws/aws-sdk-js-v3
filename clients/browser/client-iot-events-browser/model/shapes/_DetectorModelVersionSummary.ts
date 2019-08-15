import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectorModelVersionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    detectorModelName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    detectorModelVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    detectorModelArn: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
