import { _ActionRevision } from "./_ActionRevision";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutActionRevisionInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName", "stageName", "actionName", "actionRevision"],
  members: {
    pipelineName: {
      shape: {
        type: "string",
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
    actionRevision: {
      shape: _ActionRevision
    }
  }
};
