import { _WorkflowRunProperties } from "./_WorkflowRunProperties";
import { _WorkflowRunStatistics } from "./_WorkflowRunStatistics";
import { _WorkflowGraph } from "./_WorkflowGraph";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowRun: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WorkflowRunId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    WorkflowRunProperties: {
      shape: _WorkflowRunProperties
    },
    StartedOn: {
      shape: {
        type: "timestamp"
      }
    },
    CompletedOn: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Statistics: {
      shape: _WorkflowRunStatistics
    },
    Graph: {
      shape: _WorkflowGraph
    }
  }
};
