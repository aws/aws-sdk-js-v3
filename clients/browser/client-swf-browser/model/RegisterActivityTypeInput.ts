import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterActivityTypeInput: _Structure_ = {
  type: "structure",
  required: ["domain", "name", "version"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
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
