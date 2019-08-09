import { _ActivityType } from "./_ActivityType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduleActivityTaskFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: [
    "activityType",
    "activityId",
    "cause",
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
    cause: {
      shape: {
        type: "string"
      }
    },
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
