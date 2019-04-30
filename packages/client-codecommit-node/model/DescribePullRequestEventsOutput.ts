import { _PullRequestEventList } from "./_PullRequestEventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePullRequestEventsOutput: _Structure_ = {
  type: "structure",
  required: ["pullRequestEvents"],
  members: {
    pullRequestEvents: {
      shape: _PullRequestEventList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
