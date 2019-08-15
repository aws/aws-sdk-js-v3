import { _ConflictResolution } from "./_ConflictResolution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const MergePullRequestByThreeWayInput: _Structure_ = {
  type: "structure",
  required: ["pullRequestId", "repositoryName"],
  members: {
    pullRequestId: {
      shape: {
        type: "string"
      }
    },
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    sourceCommitId: {
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
    commitMessage: {
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
