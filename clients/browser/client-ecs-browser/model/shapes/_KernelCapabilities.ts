import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _KernelCapabilities: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    add: {
      shape: _StringList
    },
    drop: {
      shape: _StringList
    }
  }
};
