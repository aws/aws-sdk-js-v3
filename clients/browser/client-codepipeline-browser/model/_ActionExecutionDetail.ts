import { _ActionExecutionInput } from "./_ActionExecutionInput";
import { _ActionExecutionOutput } from "./_ActionExecutionOutput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionExecutionDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineExecutionId: {
      shape: {
        type: "string"
      }
    },
    actionExecutionId: {
      shape: {
        type: "string"
      }
    },
    pipelineVersion: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    stageName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    actionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    input: {
      shape: _ActionExecutionInput
    },
    output: {
      shape: _ActionExecutionOutput
    }
  }
};
