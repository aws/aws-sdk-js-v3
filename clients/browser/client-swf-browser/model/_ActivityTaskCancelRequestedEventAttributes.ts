import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActivityTaskCancelRequestedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["decisionTaskCompletedEventId", "activityId"],
  members: {
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    },
    activityId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
