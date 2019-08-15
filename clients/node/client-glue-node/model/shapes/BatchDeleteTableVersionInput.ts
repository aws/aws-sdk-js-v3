import { _BatchDeleteTableVersionList } from "./_BatchDeleteTableVersionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteTableVersionInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableName", "VersionIds"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TableName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionIds: {
      shape: _BatchDeleteTableVersionList
    }
  }
};
