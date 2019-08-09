import { _ListOfKeyPhrases } from "./_ListOfKeyPhrases";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDetectKeyPhrasesItemResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Index: {
      shape: {
        type: "integer"
      }
    },
    KeyPhrases: {
      shape: _ListOfKeyPhrases
    }
  }
};
