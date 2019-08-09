import { Structure as _Structure_ } from "@aws-sdk/types";

export const MergeBranchesByFastForwardInput: _Structure_ = {
  type: "structure",
  required: [
    "repositoryName",
    "sourceCommitSpecifier",
    "destinationCommitSpecifier"
  ],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    sourceCommitSpecifier: {
      shape: {
        type: "string"
      }
    },
    destinationCommitSpecifier: {
      shape: {
        type: "string"
      }
    },
    targetBranch: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
