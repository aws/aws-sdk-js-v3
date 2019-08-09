import { _LexiconDescriptionList } from "./_LexiconDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLexiconsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Lexicons: {
      shape: _LexiconDescriptionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
