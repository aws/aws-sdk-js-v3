import { _ListOfDominantLanguages } from "./_ListOfDominantLanguages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectDominantLanguageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Languages: {
      shape: _ListOfDominantLanguages
    }
  }
};
