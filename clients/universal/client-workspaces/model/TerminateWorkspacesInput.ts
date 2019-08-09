import { _TerminateWorkspaceRequests } from "./_TerminateWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateWorkspacesInput: _Structure_ = {
  type: "structure",
  required: ["TerminateWorkspaceRequests"],
  members: {
    TerminateWorkspaceRequests: {
      shape: _TerminateWorkspaceRequests
    }
  }
};
