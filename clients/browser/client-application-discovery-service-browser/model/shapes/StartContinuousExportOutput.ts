import { _SchemaStorageConfig } from "./_SchemaStorageConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartContinuousExportOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    exportId: {
      shape: {
        type: "string"
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
