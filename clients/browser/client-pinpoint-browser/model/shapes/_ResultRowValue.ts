import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResultRowValue: _Structure_ = {
  type: "structure",
  required: ["Type", "Value", "Key"],
  members: {
    Key: {
      shape: {
        type: "string"
      }
    },
    Type: {
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
