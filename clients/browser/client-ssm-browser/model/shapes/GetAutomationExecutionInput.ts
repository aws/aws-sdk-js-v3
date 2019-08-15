import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAutomationExecutionInput: _Structure_ = {
  type: "structure",
  required: ["AutomationExecutionId"],
  members: {
    AutomationExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
