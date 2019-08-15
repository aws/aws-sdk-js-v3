import { _StringMap } from "./_StringMap";
import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HadoopStepConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Jar: {
      shape: {
        type: "string"
      }
    },
    Properties: {
      shape: _StringMap
    },
    MainClass: {
      shape: {
        type: "string"
      }
    },
    Args: {
      shape: _StringList
    }
  }
};
