import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProductionBranch: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    lastDeployTime: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string",
        min: 3
      }
    },
    thumbnailUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    branchName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
