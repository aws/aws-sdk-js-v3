import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ColumnInfo: _Structure_ = {
  type: "structure",
  required: ["Name", "Type"],
  members: {
    CatalogName: {
      shape: {
        type: "string"
      }
    },
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
    Name: {
      shape: {
        type: "string"
      }
    },
    Label: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Precision: {
      shape: {
        type: "integer"
      }
    },
    Scale: {
      shape: {
        type: "integer"
      }
    },
    Nullable: {
      shape: {
        type: "string"
      }
    },
    CaseSensitive: {
      shape: {
        type: "boolean"
      }
    }
  }
};
