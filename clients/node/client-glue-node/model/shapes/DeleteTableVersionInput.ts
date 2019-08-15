import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTableVersionInput: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "TableName", "VersionId"],
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
    VersionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
