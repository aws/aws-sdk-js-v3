import { _RebuildWorkspaceRequests } from "./_RebuildWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RebuildWorkspacesInput: _Structure_ = {
  type: "structure",
  required: ["RebuildWorkspaceRequests"],
  members: {
    RebuildWorkspaceRequests: {
      shape: _RebuildWorkspaceRequests
    }
  }
};
