import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreTableFromClusterSnapshotInput: _Structure_ = {
  type: "structure",
  required: [
    "ClusterIdentifier",
    "SnapshotIdentifier",
    "SourceDatabaseName",
    "SourceTableName",
    "NewTableName"
  ],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    SourceDatabaseName: {
      shape: {
        type: "string"
      }
    },
    SourceSchemaName: {
      shape: {
        type: "string"
      }
    },
    SourceTableName: {
      shape: {
        type: "string"
      }
    },
    TargetDatabaseName: {
      shape: {
        type: "string"
      }
    },
    TargetSchemaName: {
      shape: {
        type: "string"
      }
    },
    NewTableName: {
      shape: {
        type: "string"
      }
    }
  }
};
