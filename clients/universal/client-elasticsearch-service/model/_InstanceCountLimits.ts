import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceCountLimits: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MinimumInstanceCount: {
      shape: {
        type: "integer"
      }
    },
    MaximumInstanceCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
