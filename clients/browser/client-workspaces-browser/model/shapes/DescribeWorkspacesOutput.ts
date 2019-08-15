import { _WorkspaceList } from "./_WorkspaceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Workspaces: {
      shape: _WorkspaceList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
