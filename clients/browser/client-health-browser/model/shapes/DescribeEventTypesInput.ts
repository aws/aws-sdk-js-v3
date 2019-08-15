import { _EventTypeFilter } from "./_EventTypeFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventTypesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filter: {
      shape: _EventTypeFilter
    },
    locale: {
      shape: {
        type: "string",
        min: 2
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 10
      }
    }
  }
};
