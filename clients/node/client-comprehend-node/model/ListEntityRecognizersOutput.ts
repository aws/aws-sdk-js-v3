import { _EntityRecognizerPropertiesList } from "./_EntityRecognizerPropertiesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEntityRecognizersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EntityRecognizerPropertiesList: {
      shape: _EntityRecognizerPropertiesList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
