import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlgorithmSummary: _Structure_ = {
  type: "structure",
  required: [
    "AlgorithmName",
    "AlgorithmArn",
    "CreationTime",
    "AlgorithmStatus"
  ],
  members: {
    AlgorithmName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AlgorithmArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AlgorithmDescription: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    AlgorithmStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
