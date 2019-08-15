import { _ParameterGroupList } from "./_ParameterGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeParameterGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    ParameterGroups: {
      shape: _ParameterGroupList
    }
  }
};
