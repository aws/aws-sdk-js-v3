import { _GameSessionQueueNameList } from "./_GameSessionQueueNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGameSessionQueuesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Names: {
      shape: _GameSessionQueueNameList
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
