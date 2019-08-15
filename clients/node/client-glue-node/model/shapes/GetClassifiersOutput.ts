import { _ClassifierList } from "./_ClassifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetClassifiersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Classifiers: {
      shape: _ClassifierList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
