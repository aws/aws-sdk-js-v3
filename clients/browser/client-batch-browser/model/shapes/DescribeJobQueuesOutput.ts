import { _JobQueueDetailList } from "./_JobQueueDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobQueuesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobQueues: {
      shape: _JobQueueDetailList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
