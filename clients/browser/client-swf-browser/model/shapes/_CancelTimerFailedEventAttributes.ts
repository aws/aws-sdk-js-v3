import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CancelTimerFailedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["timerId", "cause", "decisionTaskCompletedEventId"],
  members: {
    timerId: {
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
