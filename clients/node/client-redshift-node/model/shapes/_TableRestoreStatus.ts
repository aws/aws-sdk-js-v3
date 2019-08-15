import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TableRestoreStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TableRestoreRequestId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    RequestTime: {
      shape: {
        type: "timestamp"
      }
    },
    ProgressInMegaBytes: {
      shape: {
        type: "integer"
      }
    },
    TotalDataInMegaBytes: {
      shape: {
        type: "integer"
      }
    },
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
