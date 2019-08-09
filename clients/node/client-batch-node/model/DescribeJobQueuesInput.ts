import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeJobQueuesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobQueues: {
      shape: _StringList
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
