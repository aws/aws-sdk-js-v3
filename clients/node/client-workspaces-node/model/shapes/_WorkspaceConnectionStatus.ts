import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkspaceConnectionStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WorkspaceId: {
      shape: {
        type: "string"
      }
    },
    ConnectionState: {
      shape: {
        type: "string"
      }
    },
    ConnectionStateCheckTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    LastKnownUserConnectionTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
