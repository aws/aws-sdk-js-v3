import { _WorkspaceIdList } from "./_WorkspaceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspacesConnectionStatusInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkspaceIds: {
      shape: _WorkspaceIdList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
