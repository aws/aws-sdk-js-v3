import { _DescribeActivationsFilterList } from "./_DescribeActivationsFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeActivationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _DescribeActivationsFilterList
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
