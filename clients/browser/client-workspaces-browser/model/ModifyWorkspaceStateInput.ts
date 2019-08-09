import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyWorkspaceStateInput: _Structure_ = {
  type: "structure",
  required: ["WorkspaceId", "WorkspaceState"],
  members: {
    WorkspaceId: {
      shape: {
        type: "string"
      }
    },
    WorkspaceState: {
      shape: {
        type: "string"
      }
    }
  }
};
