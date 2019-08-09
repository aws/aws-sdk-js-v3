import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMergeOptionsInput: _Structure_ = {
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
    conflictDetailLevel: {
      shape: {
        type: "string"
      }
    },
    conflictResolutionStrategy: {
      shape: {
        type: "string"
      }
    }
  }
};
