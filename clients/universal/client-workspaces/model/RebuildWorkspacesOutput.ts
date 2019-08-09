import { _FailedRebuildWorkspaceRequests } from "./_FailedRebuildWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RebuildWorkspacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedRequests: {
      shape: _FailedRebuildWorkspaceRequests
    }
  }
};
