import { _StringList } from "./_StringList";
import { _StringDoubleMap } from "./_StringDoubleMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributeValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S: {
      shape: {
        type: "string",
        min: 1
      }
    },
    N: {
      shape: {
        type: "float"
      }
    },
    SL: {
      shape: _StringList
    },
    SDM: {
      shape: _StringDoubleMap
    }
  }
};
