import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Tag: _Structure_ = {
  type: "structure",
  required: ["Value", "Key"],
  members: {
    Key: {
      shape: {
        type: "string"
      },
      locationName: "key"
    },
    Value: {
      shape: {
        type: "string"
      },
      locationName: "value"
    }
  }
};
