import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SkipFinalClusterSnapshot: {
      shape: {
        type: "boolean"
      }
    },
    FinalClusterSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    FinalClusterSnapshotRetentionPeriod: {
      shape: {
        type: "integer"
      }
    }
  }
};
