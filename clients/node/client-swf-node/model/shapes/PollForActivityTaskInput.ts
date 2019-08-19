import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PollForActivityTaskInput: _Structure_ = {
  type: "structure",
  required: ["domain", "taskList"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    taskList: {
      shape: _TaskList
    },
    identity: {
      shape: {
        type: "string"
      }
    }
  }
};
