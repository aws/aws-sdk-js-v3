import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBackupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Filters: {
      shape: _Filters
    },
    SortAscending: {
      shape: {
        type: "boolean"
      }
    }
  }
};
