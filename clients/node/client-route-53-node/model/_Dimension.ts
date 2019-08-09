import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Dimension: _Structure_ = {
  type: "structure",
  required: ["Name", "Value"],
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
        min: 1
      }
    }
  }
};
