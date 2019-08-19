import { _EventFilter } from "./_EventFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    filter: {
      shape: _EventFilter
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
    },
    locale: {
      shape: {
        type: "string",
        min: 2
      }
    }
  }
};
