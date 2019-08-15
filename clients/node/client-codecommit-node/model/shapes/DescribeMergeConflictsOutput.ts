import { _ConflictMetadata } from "./_ConflictMetadata";
import { _MergeHunks } from "./_MergeHunks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMergeConflictsOutput: _Structure_ = {
  type: "structure",
  required: [
    "conflictMetadata",
    "mergeHunks",
    "destinationCommitId",
    "sourceCommitId"
  ],
  members: {
    conflictMetadata: {
      shape: _ConflictMetadata
    },
    mergeHunks: {
      shape: _MergeHunks
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    destinationCommitId: {
      shape: {
        type: "string"
      }
    },
    sourceCommitId: {
      shape: {
        type: "string"
      }
    },
    baseCommitId: {
      shape: {
        type: "string"
      }
    }
  }
};
