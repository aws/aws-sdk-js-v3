import { _WorkflowExecutionInfo } from "./_WorkflowExecutionInfo";
import { _WorkflowExecutionConfiguration } from "./_WorkflowExecutionConfiguration";
import { _WorkflowExecutionOpenCounts } from "./_WorkflowExecutionOpenCounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkflowExecutionOutput: _Structure_ = {
  type: "structure",
  required: ["executionInfo", "executionConfiguration", "openCounts"],
  members: {
    executionInfo: {
      shape: _WorkflowExecutionInfo
    },
    executionConfiguration: {
      shape: _WorkflowExecutionConfiguration
    },
    openCounts: {
      shape: _WorkflowExecutionOpenCounts
    },
    latestActivityTaskTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    latestExecutionContext: {
      shape: {
        type: "string"
      }
    }
  }
};
