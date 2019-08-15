import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Validity: _Structure_ = {
  type: "structure",
  required: ["Value", "Type"],
  members: {
    Value: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
