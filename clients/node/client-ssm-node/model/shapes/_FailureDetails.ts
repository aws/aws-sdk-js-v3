import { _AutomationParameterMap } from "./_AutomationParameterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailureDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailureStage: {
      shape: {
        type: "string"
      }
    },
    FailureType: {
      shape: {
        type: "string"
      }
    },
    Details: {
      shape: _AutomationParameterMap
    }
  }
};
