import { _FailedCreateWorkspaceRequests } from "./_FailedCreateWorkspaceRequests";
import { _WorkspaceList } from "./_WorkspaceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateWorkspacesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedRequests: {
      shape: _FailedCreateWorkspaceRequests
    },
    PendingRequests: {
      shape: _WorkspaceList
    }
  }
};
