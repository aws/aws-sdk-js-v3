import { _FailedTerminateWorkspaceRequests } from "./_FailedTerminateWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TerminateWorkspacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedRequests: {
      shape: _FailedTerminateWorkspaceRequests
    }
  }
};
