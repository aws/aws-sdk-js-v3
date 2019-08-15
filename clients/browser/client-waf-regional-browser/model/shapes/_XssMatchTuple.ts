import { _FieldToMatch } from "./_FieldToMatch";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _XssMatchTuple: _Structure_ = {
  type: "structure",
  required: ["FieldToMatch", "TextTransformation"],
  members: {
    FieldToMatch: {
      shape: _FieldToMatch
    },
    TextTransformation: {
      shape: {
        type: "string"
      }
    }
  }
};
