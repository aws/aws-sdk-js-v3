import { _FailedRebootWorkspaceRequests } from "./_FailedRebootWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RebootWorkspacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedRequests: {
      shape: _FailedRebootWorkspaceRequests
    }
  }
};
