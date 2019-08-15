import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Resource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    doubleValue: {
      shape: {
        type: "float"
      }
    },
    longValue: {
      shape: {
        type: "integer"
      }
    },
    integerValue: {
      shape: {
        type: "integer"
      }
    },
    stringSetValue: {
      shape: _StringList
    }
  }
};
