import { _Filters } from "./_Filters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTagsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _Filters
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    }
  }
};
