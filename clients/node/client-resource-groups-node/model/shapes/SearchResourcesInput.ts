import { _ResourceQuery } from "./_ResourceQuery";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchResourcesInput: _Structure_ = {
  type: "structure",
  required: ["ResourceQuery"],
  members: {
    ResourceQuery: {
      shape: _ResourceQuery
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
