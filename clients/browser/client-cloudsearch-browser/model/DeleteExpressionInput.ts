import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteExpressionInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "ExpressionName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ExpressionName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
