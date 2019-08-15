import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ColumnMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arrayBaseColumnType: {
      shape: {
        type: "integer"
      }
    },
    isAutoIncrement: {
      shape: {
        type: "boolean"
      }
    },
    isCaseSensitive: {
      shape: {
        type: "boolean"
      }
    },
    isCurrency: {
      shape: {
        type: "boolean"
      }
    },
    isSigned: {
      shape: {
        type: "boolean"
      }
    },
    label: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    nullable: {
      shape: {
        type: "integer"
      }
    },
    precision: {
      shape: {
        type: "integer"
      }
    },
    scale: {
      shape: {
        type: "integer"
      }
    },
    schemaName: {
      shape: {
        type: "string"
      }
    },
    tableName: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "integer"
      }
    },
    typeName: {
      shape: {
        type: "string"
      }
    }
  }
};
