import { _FilePaths } from "./_FilePaths";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDescribeMergeConflictsInput: _Structure_ = {
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
    },
    maxMergeHunks: {
      shape: {
        type: "integer"
      }
    },
    maxConflictFiles: {
      shape: {
        type: "integer"
      }
    },
    filePaths: {
      shape: _FilePaths
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
