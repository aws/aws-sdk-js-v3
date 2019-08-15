import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Field: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    blobValue: {
      shape: {
        type: "blob"
      }
    },
    booleanValue: {
      shape: {
        type: "boolean"
      }
    },
    doubleValue: {
      shape: {
        type: "float"
      }
    },
    isNull: {
      shape: {
        type: "boolean"
      }
    },
    longValue: {
      shape: {
        type: "integer"
      }
    },
    stringValue: {
      shape: {
        type: "string"
      }
    }
  }
};
