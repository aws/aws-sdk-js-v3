import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateFileSystemLustreConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WeeklyMaintenanceStartTime: {
      shape: {
        type: "string",
        min: 7
      }
    },
    ImportPath: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ExportPath: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ImportedFileChunkSize: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
