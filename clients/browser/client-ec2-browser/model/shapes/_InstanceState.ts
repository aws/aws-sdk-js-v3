import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceState: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "integer"
      },
      locationName: "code"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    }
  }
};
