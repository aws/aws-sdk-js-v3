import { _EntityRecognizerFilter } from "./_EntityRecognizerFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEntityRecognizersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filter: {
      shape: _EntityRecognizerFilter
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
