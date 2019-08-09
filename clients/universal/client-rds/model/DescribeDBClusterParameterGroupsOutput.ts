import { _DBClusterParameterGroupList } from "./_DBClusterParameterGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClusterParameterGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBClusterParameterGroups: {
      shape: _DBClusterParameterGroupList
    }
  }
};
