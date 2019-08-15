import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Filter: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Operator: {
      shape: {
        type: "string"
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
