import { Structure as _Structure_ } from "@aws-sdk/types";

export const EvaluateExpressionOutput: _Structure_ = {
  type: "structure",
  required: ["evaluatedExpression"],
  members: {
    evaluatedExpression: {
      shape: {
        type: "string"
      }
    }
  }
};
