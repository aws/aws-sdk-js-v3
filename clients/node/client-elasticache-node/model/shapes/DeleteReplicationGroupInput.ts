import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteReplicationGroupInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationGroupId"],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    RetainPrimaryCluster: {
      shape: {
        type: "boolean"
      }
    },
    FinalSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
