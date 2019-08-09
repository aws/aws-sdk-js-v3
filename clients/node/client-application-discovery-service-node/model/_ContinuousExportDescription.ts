import { _SchemaStorageConfig } from "./_SchemaStorageConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContinuousExportDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exportId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    statusDetail: {
      shape: {
        type: "string",
        min: 1
      }
    },
    s3Bucket: {
      shape: {
        type: "string"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    stopTime: {
      shape: {
        type: "timestamp"
      }
    },
    dataSource: {
      shape: {
        type: "string"
      }
    },
    schemaStorageConfig: {
      shape: _SchemaStorageConfig
    }
  }
};
