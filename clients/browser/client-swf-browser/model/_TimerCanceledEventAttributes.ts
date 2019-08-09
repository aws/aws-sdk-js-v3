import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimerCanceledEventAttributes: _Structure_ = {
  type: "structure",
  required: ["timerId", "startedEventId", "decisionTaskCompletedEventId"],
  members: {
    timerId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    startedEventId: {
      shape: {
        type: "integer"
      }
    },
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
