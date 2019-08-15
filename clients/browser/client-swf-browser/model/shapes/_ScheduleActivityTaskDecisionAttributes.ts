import { _ActivityType } from "./_ActivityType";
import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduleActivityTaskDecisionAttributes: _Structure_ = {
  type: "structure",
  required: ["activityType", "activityId"],
  members: {
    activityType: {
      shape: _ActivityType
    },
    activityId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    control: {
      shape: {
        type: "string"
      }
    },
    input: {
      shape: {
        type: "string"
      }
    },
    scheduleToCloseTimeout: {
      shape: {
        type: "string"
      }
    },
    taskList: {
      shape: _TaskList
    },
    taskPriority: {
      shape: {
        type: "string"
      }
    },
    scheduleToStartTimeout: {
      shape: {
        type: "string"
      }
    },
    startToCloseTimeout: {
      shape: {
        type: "string"
      }
    },
    heartbeatTimeout: {
      shape: {
        type: "string"
      }
    }
  }
};
