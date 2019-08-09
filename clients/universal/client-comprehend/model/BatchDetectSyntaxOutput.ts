import { _ListOfDetectSyntaxResult } from "./_ListOfDetectSyntaxResult";
import { _BatchItemErrorList } from "./_BatchItemErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDetectSyntaxOutput: _Structure_ = {
  type: "structure",
  required: ["ResultList", "ErrorList"],
  members: {
    ResultList: {
      shape: _ListOfDetectSyntaxResult
    },
    ErrorList: {
      shape: _BatchItemErrorList
    }
  }
};
