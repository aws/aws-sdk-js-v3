import { _AutomationExecutionFilterValueList } from "./_AutomationExecutionFilterValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutomationExecutionFilter: _Structure_ = {
  type: "structure",
  required: ["Key", "Values"],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Values: {
      shape: _AutomationExecutionFilterValueList
    }
  }
};
