import { _AutomationParameterMap } from "./_AutomationParameterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowAutomationParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentVersion: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _AutomationParameterMap
    }
  }
};
