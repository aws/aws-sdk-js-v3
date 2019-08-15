import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailedWorkspaceChangeRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkspaceId: {
      shape: {
        type: "string"
      }
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
