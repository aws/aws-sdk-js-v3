import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Command: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    ScriptPath: {
      shape: {
        type: "string"
      }
    },
    Args: {
      shape: _StringList
    }
  }
};
