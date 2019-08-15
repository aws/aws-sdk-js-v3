import { _WorkspaceRequest } from "./_WorkspaceRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailedCreateWorkspaceRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkspaceRequest: {
      shape: _WorkspaceRequest
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
