import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePullRequestDescriptionInput: _Structure_ = {
  type: "structure",
  required: ["pullRequestId", "description"],
  members: {
    pullRequestId: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
