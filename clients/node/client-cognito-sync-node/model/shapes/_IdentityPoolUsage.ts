import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IdentityPoolUsage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SyncSessionsCount: {
      shape: {
        type: "integer"
      }
    },
    DataStorage: {
      shape: {
        type: "integer"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
