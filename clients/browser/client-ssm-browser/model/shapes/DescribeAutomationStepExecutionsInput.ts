import { _StepExecutionFilterList } from "./_StepExecutionFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAutomationStepExecutionsInput: _Structure_ = {
  type: "structure",
  required: ["AutomationExecutionId"],
  members: {
    AutomationExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    Filters: {
      shape: _StepExecutionFilterList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ReverseOrder: {
      shape: {
        type: "boolean"
      }
    }
  }
};
