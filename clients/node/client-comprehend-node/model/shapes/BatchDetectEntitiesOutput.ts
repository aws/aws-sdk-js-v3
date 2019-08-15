import { _ListOfDetectEntitiesResult } from "./_ListOfDetectEntitiesResult";
import { _BatchItemErrorList } from "./_BatchItemErrorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDetectEntitiesOutput: _Structure_ = {
  type: "structure",
  required: ["ResultList", "ErrorList"],
  members: {
    ResultList: {
      shape: _ListOfDetectEntitiesResult
    },
    ErrorList: {
      shape: _BatchItemErrorList
    }
  }
};
