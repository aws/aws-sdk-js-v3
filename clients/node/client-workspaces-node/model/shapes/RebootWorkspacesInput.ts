import { _RebootWorkspaceRequests } from "./_RebootWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RebootWorkspacesInput: _Structure_ = {
  type: "structure",
  required: ["RebootWorkspaceRequests"],
  members: {
    RebootWorkspaceRequests: {
      shape: _RebootWorkspaceRequests
    }
  }
};
