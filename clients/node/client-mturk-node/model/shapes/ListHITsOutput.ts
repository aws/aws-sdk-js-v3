import { _HITList } from "./_HITList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListHITsOutput: _Structure_ = {
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
