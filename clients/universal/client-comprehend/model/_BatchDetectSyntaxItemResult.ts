import { _ListOfSyntaxTokens } from "./_ListOfSyntaxTokens";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDetectSyntaxItemResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Index: {
      shape: {
        type: "integer"
      }
    },
    SyntaxTokens: {
      shape: _ListOfSyntaxTokens
    }
  }
};
