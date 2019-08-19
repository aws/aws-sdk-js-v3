import { _ListOfSyntaxTokens } from "./_ListOfSyntaxTokens";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectSyntaxOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SyntaxTokens: {
      shape: _ListOfSyntaxTokens
    }
  }
};
