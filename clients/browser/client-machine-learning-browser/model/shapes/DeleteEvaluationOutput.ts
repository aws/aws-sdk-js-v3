import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEvaluationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EvaluationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
