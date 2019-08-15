import { _AutomationExecutionFilterList } from "./_AutomationExecutionFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAutomationExecutionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _AutomationExecutionFilterList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
