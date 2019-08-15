import { _ListOfDominantLanguages } from "./_ListOfDominantLanguages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchDetectDominantLanguageItemResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Index: {
      shape: {
        type: "integer"
      }
    },
    Languages: {
      shape: _ListOfDominantLanguages
    }
  }
};
