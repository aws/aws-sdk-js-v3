import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RefreshSchemasStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EndpointArn: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    LastRefreshDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastFailureMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
