import { _WorkflowExecutionInfoList } from "./_WorkflowExecutionInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClosedWorkflowExecutionsOutput: _Structure_ = {
  type: "structure",
  required: ["executionInfos"],
  members: {
    executionInfos: {
      shape: _WorkflowExecutionInfoList
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
