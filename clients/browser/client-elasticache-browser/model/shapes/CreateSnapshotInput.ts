import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotName"],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    SnapshotName: {
      shape: {
        type: "string"
      }
    }
  }
};
