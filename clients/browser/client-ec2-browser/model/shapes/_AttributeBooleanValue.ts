import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributeBooleanValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "boolean"
      },
      locationName: "value"
    }
  }
};
