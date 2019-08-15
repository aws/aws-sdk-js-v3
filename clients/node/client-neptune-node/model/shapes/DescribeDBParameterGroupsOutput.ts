import { _DBParameterGroupList } from "./_DBParameterGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBParameterGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    DBParameterGroups: {
      shape: _DBParameterGroupList
    }
  }
};
