import { _FieldToMatch } from "./_FieldToMatch";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ByteMatchTuple: _Structure_ = {
  type: "structure",
  required: [
    "FieldToMatch",
    "TargetString",
    "TextTransformation",
    "PositionalConstraint"
  ],
  members: {
    FieldToMatch: {
      shape: _FieldToMatch
    },
    TargetString: {
      shape: {
        type: "blob"
      }
    },
    TextTransformation: {
      shape: {
        type: "string"
      }
    },
    PositionalConstraint: {
      shape: {
        type: "string"
      }
    }
  }
};
