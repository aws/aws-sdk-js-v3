import { _PullRequestTargetList } from "./_PullRequestTargetList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PullRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pullRequestId: {
      shape: {
        type: "string"
      }
    },
    title: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    lastActivityDate: {
      shape: {
        type: "timestamp"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    pullRequestStatus: {
      shape: {
        type: "string"
      }
    },
    authorArn: {
      shape: {
        type: "string"
      }
    },
    pullRequestTargets: {
      shape: _PullRequestTargetList
    },
    clientRequestToken: {
      shape: {
        type: "string"
      }
    }
  }
};
