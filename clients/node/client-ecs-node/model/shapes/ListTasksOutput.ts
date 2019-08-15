import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskArns: {
      shape: _StringList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
