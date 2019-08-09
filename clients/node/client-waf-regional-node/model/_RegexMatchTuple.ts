import { _FieldToMatch } from "./_FieldToMatch";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RegexMatchTuple: _Structure_ = {
  type: "structure",
  required: ["FieldToMatch", "TextTransformation", "RegexPatternSetId"],
  members: {
    FieldToMatch: {
      shape: _FieldToMatch
    },
    TextTransformation: {
      shape: {
        type: "string"
      }
    },
    RegexPatternSetId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
