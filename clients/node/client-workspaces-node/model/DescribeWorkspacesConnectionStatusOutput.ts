import { _WorkspaceConnectionStatusList } from "./_WorkspaceConnectionStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspacesConnectionStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkspacesConnectionStatus: {
      shape: _WorkspaceConnectionStatusList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
