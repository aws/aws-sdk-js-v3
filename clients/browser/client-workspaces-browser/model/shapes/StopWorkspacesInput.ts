import { _StopWorkspaceRequests } from "./_StopWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopWorkspacesInput: _Structure_ = {
  type: "structure",
  required: ["StopWorkspaceRequests"],
  members: {
    StopWorkspaceRequests: {
      shape: _StopWorkspaceRequests
    }
  }
};
