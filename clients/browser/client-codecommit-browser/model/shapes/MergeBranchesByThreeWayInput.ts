import { _ConflictResolution } from "./_ConflictResolution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const MergeBranchesByThreeWayInput: _Structure_ = {
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
    authorName: {
      shape: {
        type: "string"
      }
    },
    email: {
      shape: {
        type: "string"
      }
    },
    commitMessage: {
      shape: {
        type: "string"
      }
    },
    keepEmptyFolders: {
      shape: {
        type: "boolean"
      }
    },
    conflictResolution: {
      shape: _ConflictResolution
    }
  }
};
