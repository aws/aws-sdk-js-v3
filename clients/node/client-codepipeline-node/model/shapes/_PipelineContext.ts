import { _StageContext } from "./_StageContext";
import { _ActionContext } from "./_ActionContext";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineContext: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipelineName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    stage: {
      shape: _StageContext
    },
    action: {
      shape: _ActionContext
    },
    pipelineArn: {
      shape: {
        type: "string"
      }
    },
    pipelineExecutionId: {
      shape: {
        type: "string"
      }
    }
  }
};
