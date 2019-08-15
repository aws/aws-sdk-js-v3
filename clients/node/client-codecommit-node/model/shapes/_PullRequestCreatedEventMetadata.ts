import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PullRequestCreatedEventMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    destinationCommitId: {
      shape: {
        type: "string"
      }
    },
    mergeBase: {
      shape: {
        type: "string"
      }
    }
  }
};
