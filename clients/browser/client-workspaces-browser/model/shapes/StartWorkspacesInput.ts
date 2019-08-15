import { _StartWorkspaceRequests } from "./_StartWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartWorkspacesInput: _Structure_ = {
  type: "structure",
  required: ["StartWorkspaceRequests"],
  members: {
    StartWorkspaceRequests: {
      shape: _StartWorkspaceRequests
    }
  }
};
