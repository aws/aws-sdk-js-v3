import { _ExpressionStatusList } from "./_ExpressionStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExpressionsOutput: _Structure_ = {
  type: "structure",
  required: ["Expressions"],
  members: {
    Expressions: {
      shape: _ExpressionStatusList
    }
  }
};
