import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimerStartedEventAttributes: _Structure_ = {
  type: "structure",
  required: ["timerId", "startToFireTimeout", "decisionTaskCompletedEventId"],
  members: {
    timerId: {
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
    startToFireTimeout: {
      shape: {
        type: "string",
        min: 1
      }
    },
    decisionTaskCompletedEventId: {
      shape: {
        type: "integer"
      }
    }
  }
};
