import { _ListOfDetectKeyPhrasesResult } from "./_ListOfDetectKeyPhrasesResult";
import { _BatchItemErrorList } from "./_BatchItemErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDetectKeyPhrasesOutput: _Structure_ = {
  type: "structure",
  required: ["ResultList", "ErrorList"],
  members: {
    ResultList: {
      shape: _ListOfDetectKeyPhrasesResult
    },
    ErrorList: {
      shape: _BatchItemErrorList
    }
  }
};
