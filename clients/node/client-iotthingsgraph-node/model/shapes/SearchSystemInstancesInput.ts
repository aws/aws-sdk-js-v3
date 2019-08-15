import { _SystemInstanceFilters } from "./_SystemInstanceFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchSystemInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filters: {
      shape: _SystemInstanceFilters
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
