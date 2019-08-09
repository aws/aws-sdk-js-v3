import { _FailedStartWorkspaceRequests } from "./_FailedStartWorkspaceRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartWorkspacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedRequests: {
      shape: _FailedStartWorkspaceRequests
    }
  }
};
