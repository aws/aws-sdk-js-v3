import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Tmpfs: _Structure_ = {
  type: "structure",
  required: ["containerPath", "size"],
  members: {
    containerPath: {
      shape: {
        type: "string"
      }
    },
    size: {
      shape: {
        type: "integer"
      }
    },
    mountOptions: {
      shape: _StringList
    }
  }
};
