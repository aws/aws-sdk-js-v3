import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CancelTimerDecisionAttributes: _Structure_ = {
  type: "structure",
  required: ["timerId"],
  members: {
    timerId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
