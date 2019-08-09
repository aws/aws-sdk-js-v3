import { _WorkspaceIdList } from "./_WorkspaceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWorkspacesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkspaceIds: {
      shape: _WorkspaceIdList
    },
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BundleId: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
