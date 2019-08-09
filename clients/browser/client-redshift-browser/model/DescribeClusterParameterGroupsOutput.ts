import { _ParameterGroupList } from "./_ParameterGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterParameterGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ParameterGroups: {
      shape: _ParameterGroupList
    }
  }
};
