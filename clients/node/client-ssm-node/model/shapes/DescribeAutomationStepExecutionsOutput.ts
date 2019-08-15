import { _StepExecutionList } from "./_StepExecutionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAutomationStepExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StepExecutions: {
      shape: _StepExecutionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
