import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceCount: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "instanceCount"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    }
  }
};
