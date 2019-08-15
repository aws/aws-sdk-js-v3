import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SchemaConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RoleARN: {
      shape: {
        type: "string"
      }
    },
    CatalogId: {
      shape: {
        type: "string"
      }
    },
    DatabaseName: {
      shape: {
        type: "string"
      }
    },
    TableName: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    VersionId: {
      shape: {
        type: "string"
      }
    }
  }
};
