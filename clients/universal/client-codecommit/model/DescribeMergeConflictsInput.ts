import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMergeConflictsInput: _Structure_ = {
  type: "structure",
  required: [
    "repositoryName",
    "destinationCommitSpecifier",
    "sourceCommitSpecifier",
    "mergeOption",
    "filePath"
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
    },
    maxMergeHunks: {
      shape: {
        type: "integer"
      }
    },
    filePath: {
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
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
