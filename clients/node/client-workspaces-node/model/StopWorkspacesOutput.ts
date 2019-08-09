import { _FailedStopWorkspaceRequests } from "./_FailedStopWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopWorkspacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedRequests: {
      shape: _FailedStopWorkspaceRequests
    }
  }
};
