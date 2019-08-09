import { _Expression } from "./_Expression";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DefineExpressionInput: _Structure_ = {
  type: "structure",
  required: ["DomainName", "Expression"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Expression: {
      shape: _Expression
    }
  }
};
