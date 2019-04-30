import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPullRequestInput: _Structure_ = {
  type: "structure",
  required: ["pullRequestId"],
  members: {
    pullRequestId: {
      shape: {
        type: "string"
      }
    }
  }
};
