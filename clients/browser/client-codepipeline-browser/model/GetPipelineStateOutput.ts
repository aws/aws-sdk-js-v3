import { _StageStateList } from "./_StageStateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPipelineStateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    pipelineVersion: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    stageStates: {
      shape: _StageStateList
    },
    created: {
      shape: {
        type: "timestamp"
      }
    },
    updated: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
