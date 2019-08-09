import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataRepositoryConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
