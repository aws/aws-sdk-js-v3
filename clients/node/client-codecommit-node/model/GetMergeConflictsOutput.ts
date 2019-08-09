import { _ConflictMetadataList } from "./_ConflictMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMergeConflictsOutput: _Structure_ = {
  type: "structure",
  required: [
    "mergeable",
    "destinationCommitId",
    "sourceCommitId",
    "conflictMetadataList"
  ],
  members: {
    mergeable: {
      shape: {
        type: "boolean"
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
    },
    conflictMetadataList: {
      shape: _ConflictMetadataList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
