import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEvaluationInput: _Structure_ = {
  type: "structure",
  required: ["EvaluationId"],
  members: {
    EvaluationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
