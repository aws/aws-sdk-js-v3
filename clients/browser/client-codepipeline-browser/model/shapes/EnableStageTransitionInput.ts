import { Structure as _Structure_ } from "@aws-sdk/types";

export const EnableStageTransitionInput: _Structure_ = {
  type: "structure",
  required: ["pipelineName", "stageName", "transitionType"],
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
    }
  }
};
