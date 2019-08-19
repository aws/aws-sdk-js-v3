import { _OpsItemFilters } from "./_OpsItemFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOpsItemsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OpsItemFilters: {
      shape: _OpsItemFilters
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
