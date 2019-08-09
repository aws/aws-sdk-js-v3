import { _ExecutionTimeFilter } from "./_ExecutionTimeFilter";
import { _WorkflowExecutionFilter } from "./_WorkflowExecutionFilter";
import { _CloseStatusFilter } from "./_CloseStatusFilter";
import { _WorkflowTypeFilter } from "./_WorkflowTypeFilter";
import { _TagFilter } from "./_TagFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClosedWorkflowExecutionsInput: _Structure_ = {
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
    closeStatusFilter: {
      shape: _CloseStatusFilter
    },
    typeFilter: {
      shape: _WorkflowTypeFilter
    },
    tagFilter: {
      shape: _TagFilter
    },
    nextPageToken: {
      shape: {
        type: "string"
      }
    },
    maximumPageSize: {
      shape: {
        type: "integer"
      }
    },
    reverseOrder: {
      shape: {
        type: "boolean"
      }
    }
  }
};
