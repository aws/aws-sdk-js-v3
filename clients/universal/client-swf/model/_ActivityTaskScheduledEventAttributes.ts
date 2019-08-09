import { _ActivityType } from "./_ActivityType";
import { _TaskList } from "./_TaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityTaskScheduledEventAttributes: _Structure_ = {
  type: "structure",
  required: [
    "activityType",
    "activityId",
    "taskList",
    "decisionTaskCompletedEventId"
  ],
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
    input: {
      shape: {
        type: "string"
      }
    },
    control: {
      shape: {
        type: "string"
      }
    },
    scheduleToStartTimeout: {
      shape: {
        type: "string"
      }
    },
    scheduleToCloseTimeout: {
      shape: {
        type: "string"
      }
    },
    startToCloseTimeout: {
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
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    },
    heartbeatTimeout: {
      shape: {
        type: "string"
      }
    }
  }
};
