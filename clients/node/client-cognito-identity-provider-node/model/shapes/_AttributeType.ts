import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttributeType: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Value: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
