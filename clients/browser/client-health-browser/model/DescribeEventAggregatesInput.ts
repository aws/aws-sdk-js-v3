import { _EventFilter } from "./_EventFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventAggregatesInput: _Structure_ = {
  type: "structure",
  required: ["aggregateField"],
  members: {
    filter: {
      shape: _EventFilter
    },
    aggregateField: {
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
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
