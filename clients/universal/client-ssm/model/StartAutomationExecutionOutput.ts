import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartAutomationExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutomationExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
