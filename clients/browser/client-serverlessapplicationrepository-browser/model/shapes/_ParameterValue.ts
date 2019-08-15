import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ParameterValue: _Structure_ = {
  type: "structure",
  required: ["Value", "Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    Value: {
      shape: {
        type: "string"
      },
      locationName: "value"
    }
  }
};
