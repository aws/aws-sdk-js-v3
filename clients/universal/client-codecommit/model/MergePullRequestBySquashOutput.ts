import { _PullRequest } from "./_PullRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const MergePullRequestBySquashOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pullRequest: {
      shape: _PullRequest
    }
  }
};
