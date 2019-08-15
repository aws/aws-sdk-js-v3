import { _WorkspacesIpGroupsList } from "./_WorkspacesIpGroupsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIpGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Result: {
      shape: _WorkspacesIpGroupsList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
