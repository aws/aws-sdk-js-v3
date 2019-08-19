import { _ArrayValueList } from "./_ArrayValueList";
import { _StructValue } from "./_StructValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Value: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arrayValues: {
      shape: _ArrayValueList
    },
    bigIntValue: {
      shape: {
        type: "integer"
      }
    },
    bitValue: {
      shape: {
        type: "boolean"
      }
    },
    blobValue: {
      shape: {
        type: "blob"
      }
    },
    doubleValue: {
      shape: {
        type: "float"
      }
    },
    intValue: {
      shape: {
        type: "integer"
      }
    },
    isNull: {
      shape: {
        type: "boolean"
      }
    },
    realValue: {
      shape: {
        type: "float"
      }
    },
    stringValue: {
      shape: {
        type: "string"
      }
    },
    structValue: {
      shape: _StructValue
    }
  }
};
