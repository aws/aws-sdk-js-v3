import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimerFiredEventAttributes: _Structure_ = {
  type: "structure",
  required: ["timerId", "startedEventId"],
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
    }
  }
};
