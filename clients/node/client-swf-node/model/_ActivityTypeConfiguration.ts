import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityTypeConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    defaultTaskStartToCloseTimeout: {
      shape: {
        type: "string"
      }
    },
    defaultTaskHeartbeatTimeout: {
      shape: {
        type: "string"
      }
    },
    defaultTaskList: {
      shape: _TaskList
    },
    defaultTaskPriority: {
      shape: {
        type: "string"
      }
    },
    defaultTaskScheduleToStartTimeout: {
      shape: {
        type: "string"
      }
    },
    defaultTaskScheduleToCloseTimeout: {
      shape: {
        type: "string"
      }
    }
  }
};
