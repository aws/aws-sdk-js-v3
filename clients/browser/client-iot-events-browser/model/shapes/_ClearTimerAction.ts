import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClearTimerAction: _Structure_ = {
  type: "structure",
  required: ["timerName"],
  members: {
    timerName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
