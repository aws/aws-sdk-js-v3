import { _ExpressionStatus } from "./_ExpressionStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DefineExpressionOutput: _Structure_ = {
  type: "structure",
  required: ["Expression"],
  members: {
    Expression: {
      shape: _ExpressionStatus
    }
  }
};
