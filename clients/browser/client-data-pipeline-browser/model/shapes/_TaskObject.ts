import { _PipelineObjectMap } from "./_PipelineObjectMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TaskObject: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    taskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    attemptId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    objects: {
      shape: _PipelineObjectMap
    }
  }
};
