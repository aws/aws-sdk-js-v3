import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PendingModifiedRelationalDatabaseValues: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    masterUserPassword: {
      shape: {
        type: "string"
      }
    },
    engineVersion: {
      shape: {
        type: "string"
      }
    },
    backupRetentionEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
