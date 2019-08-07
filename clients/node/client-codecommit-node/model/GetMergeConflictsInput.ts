import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMergeConflictsInput: _Structure_ = {
  type: "structure",
  required: [
    "repositoryName",
    "destinationCommitSpecifier",
    "sourceCommitSpecifier",
    "mergeOption"
  ],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    destinationCommitSpecifier: {
      shape: {
        type: "string"
      }
    },
    sourceCommitSpecifier: {
      shape: {
        type: "string"
      }
    },
    mergeOption: {
      shape: {
        type: "string"
      }
    }
  }
};
