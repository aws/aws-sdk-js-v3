import { _FieldToMatch } from "./_FieldToMatch";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SizeConstraint: _Structure_ = {
  type: "structure",
  required: [
    "FieldToMatch",
    "TextTransformation",
    "ComparisonOperator",
    "Size"
  ],
  members: {
    FieldToMatch: {
      shape: _FieldToMatch
    },
    TextTransformation: {
      shape: {
        type: "string"
      }
    },
    ComparisonOperator: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    }
  }
};
