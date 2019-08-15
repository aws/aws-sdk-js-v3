import { _PolicyNames } from "./_PolicyNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackendServerDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstancePort: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    PolicyNames: {
      shape: _PolicyNames
    }
  }
};
