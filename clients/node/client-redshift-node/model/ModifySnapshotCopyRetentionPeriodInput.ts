import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifySnapshotCopyRetentionPeriodInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier", "RetentionPeriod"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    RetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    Manual: {
      shape: {
        type: "boolean"
      }
    }
  }
};
