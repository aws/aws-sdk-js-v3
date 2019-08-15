import { Structure as _Structure_ } from "@aws-sdk/types";

export const EvaluateExpressionInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId", "objectId", "expression"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    objectId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    expression: {
      shape: {
        type: "string"
      }
    }
  }
};
