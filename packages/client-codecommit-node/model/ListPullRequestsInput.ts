import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPullRequestsInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName"],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    authorArn: {
      shape: {
        type: "string"
      }
    },
    pullRequestStatus: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
