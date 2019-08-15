import { _Conflicts } from "./_Conflicts";
import { _BatchDescribeMergeConflictsErrors } from "./_BatchDescribeMergeConflictsErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDescribeMergeConflictsOutput: _Structure_ = {
  type: "structure",
  required: ["conflicts", "destinationCommitId", "sourceCommitId"],
  members: {
    conflicts: {
      shape: _Conflicts
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    errors: {
      shape: _BatchDescribeMergeConflictsErrors
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
