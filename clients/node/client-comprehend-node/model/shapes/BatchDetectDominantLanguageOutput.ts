import { _ListOfDetectDominantLanguageResult } from "./_ListOfDetectDominantLanguageResult";
import { _BatchItemErrorList } from "./_BatchItemErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDetectDominantLanguageOutput: _Structure_ = {
  type: "structure",
  required: ["ResultList", "ErrorList"],
  members: {
    ResultList: {
      shape: _ListOfDetectDominantLanguageResult
    },
    ErrorList: {
      shape: _BatchItemErrorList
    }
  }
};
