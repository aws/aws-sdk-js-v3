import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Expression: _Structure_ = {
  type: "structure",
  required: ["ExpressionName", "ExpressionValue"],
  members: {
    ExpressionName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExpressionValue: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
