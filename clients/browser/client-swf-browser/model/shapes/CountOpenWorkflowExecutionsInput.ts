import { _ExecutionTimeFilter } from "./_ExecutionTimeFilter";
import { _WorkflowTypeFilter } from "./_WorkflowTypeFilter";
import { _TagFilter } from "./_TagFilter";
import { _WorkflowExecutionFilter } from "./_WorkflowExecutionFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CountOpenWorkflowExecutionsInput: _Structure_ = {
  type: "structure",
  required: ["domain", "startTimeFilter"],
  members: {
    domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    startTimeFilter: {
      shape: _ExecutionTimeFilter
    },
    typeFilter: {
      shape: _WorkflowTypeFilter
    },
    tagFilter: {
      shape: _TagFilter
    },
    executionFilter: {
      shape: _WorkflowExecutionFilter
    }
  }
};
