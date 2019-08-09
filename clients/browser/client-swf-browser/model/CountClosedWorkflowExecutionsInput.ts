import { _ExecutionTimeFilter } from "./_ExecutionTimeFilter";
import { _WorkflowExecutionFilter } from "./_WorkflowExecutionFilter";
import { _WorkflowTypeFilter } from "./_WorkflowTypeFilter";
import { _TagFilter } from "./_TagFilter";
import { _CloseStatusFilter } from "./_CloseStatusFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CountClosedWorkflowExecutionsInput: _Structure_ = {
  type: "structure",
  required: ["domain"],
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
    closeTimeFilter: {
      shape: _ExecutionTimeFilter
    },
    executionFilter: {
      shape: _WorkflowExecutionFilter
    },
    typeFilter: {
      shape: _WorkflowTypeFilter
    },
    tagFilter: {
      shape: _TagFilter
    },
    closeStatusFilter: {
      shape: _CloseStatusFilter
    }
  }
};
