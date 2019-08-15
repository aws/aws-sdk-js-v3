import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DecisionTaskScheduledEventAttributes: _Structure_ = {
  type: "structure",
  required: ["taskList"],
  members: {
    taskList: {
      shape: _TaskList
    },
    taskPriority: {
      shape: {
        type: "string"
      }
    },
    startToCloseTimeout: {
      shape: {
        type: "string"
      }
    }
  }
};
