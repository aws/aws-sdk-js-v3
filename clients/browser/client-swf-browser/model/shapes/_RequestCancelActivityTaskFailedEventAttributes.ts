import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RequestCancelActivityTaskFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["activityId", "cause", "decisionTaskCompletedEventId"],
  members: {
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
