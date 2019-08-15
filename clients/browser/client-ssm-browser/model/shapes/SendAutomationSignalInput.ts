import { _AutomationParameterMap } from "./_AutomationParameterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendAutomationSignalInput: _Structure_ = {
  type: "structure",
  required: ["AutomationExecutionId", "SignalType"],
  members: {
    AutomationExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    SignalType: {
      shape: {
        type: "string"
      }
    },
    Payload: {
      shape: _AutomationParameterMap
    }
  }
};
