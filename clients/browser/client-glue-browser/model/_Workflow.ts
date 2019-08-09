import { _WorkflowRunProperties } from "./_WorkflowRunProperties";
import { _WorkflowRun } from "./_WorkflowRun";
import { _WorkflowGraph } from "./_WorkflowGraph";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Workflow: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    DefaultRunProperties: {
      shape: _WorkflowRunProperties
    },
    CreatedOn: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedOn: {
      shape: {
        type: "timestamp"
      }
    },
    LastRun: {
      shape: _WorkflowRun
    },
    Graph: {
      shape: _WorkflowGraph
    }
  }
};
