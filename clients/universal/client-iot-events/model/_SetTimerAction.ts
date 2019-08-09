import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SetTimerAction: _Structure_ = {
  type: "structure",
  required: ["timerName", "seconds"],
  members: {
    timerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    seconds: {
      shape: {
        type: "integer"
      }
    }
  }
};
