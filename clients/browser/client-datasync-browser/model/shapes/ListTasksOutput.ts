import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Tasks: {
      shape: _TaskList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
