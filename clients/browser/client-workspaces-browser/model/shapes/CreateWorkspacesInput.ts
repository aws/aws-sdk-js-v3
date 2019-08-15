import { _WorkspaceRequestList } from "./_WorkspaceRequestList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateWorkspacesInput: _Structure_ = {
  type: "structure",
  required: ["Workspaces"],
  members: {
    Workspaces: {
      shape: _WorkspaceRequestList
    }
  }
};
