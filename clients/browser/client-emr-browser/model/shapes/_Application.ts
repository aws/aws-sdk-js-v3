import { _StringList } from "./_StringList";
import { _StringMap } from "./_StringMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Application: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    },
    Args: {
      shape: _StringList
    },
    AdditionalInfo: {
      shape: _StringMap
    }
  }
};
