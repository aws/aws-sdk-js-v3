import { _HITList } from "./_HITList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListReviewableHITsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NumResults: {
      shape: {
        type: "integer"
      }
    },
    HITs: {
      shape: _HITList
    }
  }
};
