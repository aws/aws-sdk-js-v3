import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TableStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SchemaName: {
      shape: {
        type: "string"
      }
    },
    TableName: {
      shape: {
        type: "string"
      }
    },
    Inserts: {
      shape: {
        type: "integer"
      }
    },
    Deletes: {
      shape: {
        type: "integer"
      }
    },
    Updates: {
      shape: {
        type: "integer"
      }
    },
    Ddls: {
      shape: {
        type: "integer"
      }
    },
    FullLoadRows: {
      shape: {
        type: "integer"
      }
    },
    FullLoadCondtnlChkFailedRows: {
      shape: {
        type: "integer"
      }
    },
    FullLoadErrorRows: {
      shape: {
        type: "integer"
      }
    },
    LastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    },
    TableState: {
      shape: {
        type: "string"
      }
    },
    ValidationPendingRecords: {
      shape: {
        type: "integer"
      }
    },
    ValidationFailedRecords: {
      shape: {
        type: "integer"
      }
    },
    ValidationSuspendedRecords: {
      shape: {
        type: "integer"
      }
    },
    ValidationState: {
      shape: {
        type: "string"
      }
    },
    ValidationStateDetails: {
      shape: {
        type: "string"
      }
    }
  }
};
