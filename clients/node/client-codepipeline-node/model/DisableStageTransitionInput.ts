import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableStageTransitionInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName", "stageName", "transitionType", "reason"],
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
    transitionType: {
      shape: {
        type: "string"
      }
    },
    reason: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
