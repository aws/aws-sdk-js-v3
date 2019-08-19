import { _ParameterGroupNameList } from "./_ParameterGroupNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeParameterGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ParameterGroupNames: {
      shape: _ParameterGroupNameList
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
