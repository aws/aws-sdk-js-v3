import { _Lexicon } from "./_Lexicon";
import { _LexiconAttributes } from "./_LexiconAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLexiconOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Lexicon: {
      shape: _Lexicon
    },
    LexiconAttributes: {
      shape: _LexiconAttributes
    }
  }
};
