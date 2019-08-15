import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SolutionVersionSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    solutionVersionArn: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    creationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    failureReason: {
      shape: {
        type: "string"
      }
    }
  }
};
