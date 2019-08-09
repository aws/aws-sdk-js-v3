import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeSnapshotAccessInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotIdentifier", "AccountWithRestoreAccess"],
  members: {
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    AccountWithRestoreAccess: {
      shape: {
        type: "string"
      }
    }
  }
};
