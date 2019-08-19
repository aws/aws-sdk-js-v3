import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StartTimerDecisionAttributes: _Structure_ = {
  type: "structure",
  required: ["timerId", "startToFireTimeout"],
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
    }
  }
};
