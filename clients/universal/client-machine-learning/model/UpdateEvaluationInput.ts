import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEvaluationInput: _Structure_ = {
  type: "structure",
  required: ["EvaluationId", "EvaluationName"],
  members: {
    EvaluationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EvaluationName: {
      shape: {
        type: "string"
      }
    }
  }
};
