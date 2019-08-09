import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CatalogImportStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImportCompleted: {
      shape: {
        type: "boolean"
      }
    },
    ImportTime: {
      shape: {
        type: "timestamp"
      }
    },
    ImportedBy: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
