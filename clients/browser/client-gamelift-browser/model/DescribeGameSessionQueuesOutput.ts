import { _GameSessionQueueList } from "./_GameSessionQueueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGameSessionQueuesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameSessionQueues: {
      shape: _GameSessionQueueList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
