import { _AutomationExecution } from "./_AutomationExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAutomationExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutomationExecution: {
      shape: _AutomationExecution
    }
  }
};
