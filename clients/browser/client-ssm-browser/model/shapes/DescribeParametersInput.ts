import { _ParametersFilterList } from "./_ParametersFilterList";
import { _ParameterStringFilterList } from "./_ParameterStringFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeParametersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _ParametersFilterList
    },
    ParameterFilters: {
      shape: _ParameterStringFilterList
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
