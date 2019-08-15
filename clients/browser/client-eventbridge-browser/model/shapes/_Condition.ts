import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Condition: _Structure_ = {
  type: "structure",
  required: ["Type", "Key", "Value"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Key: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    }
  }
};
