import { _AutomationExecutionMetadataList } from "./_AutomationExecutionMetadataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAutomationExecutionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutomationExecutionMetadataList: {
      shape: _AutomationExecutionMetadataList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
