import { _ListOfDetectSentimentResult } from "./_ListOfDetectSentimentResult";
import { _BatchItemErrorList } from "./_BatchItemErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDetectSentimentOutput: _Structure_ = {
  type: "structure",
  required: ["ResultList", "ErrorList"],
  members: {
    ResultList: {
      shape: _ListOfDetectSentimentResult
    },
    ErrorList: {
      shape: _BatchItemErrorList
    }
  }
};
