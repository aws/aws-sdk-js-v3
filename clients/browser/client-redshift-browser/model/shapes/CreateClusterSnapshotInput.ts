import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateClusterSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotIdentifier", "ClusterIdentifier"],
  members: {
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    ManualSnapshotRetentionPeriod: {
      shape: {
        type: "integer"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
