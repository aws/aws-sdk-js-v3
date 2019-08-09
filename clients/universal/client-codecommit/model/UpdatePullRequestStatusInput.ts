import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePullRequestStatusInput: _Structure_ = {
  type: "structure",
  required: ["pullRequestId", "pullRequestStatus"],
  members: {
    pullRequestId: {
      shape: {
        type: "string"
      }
    },
    pullRequestStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
