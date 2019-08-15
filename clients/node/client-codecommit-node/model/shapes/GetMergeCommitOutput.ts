import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMergeCommitOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    sourceCommitId: {
      shape: {
        type: "string"
      }
    },
    destinationCommitId: {
      shape: {
        type: "string"
      }
    },
    baseCommitId: {
      shape: {
        type: "string"
      }
    },
    mergedCommitId: {
      shape: {
        type: "string"
      }
    }
  }
};
