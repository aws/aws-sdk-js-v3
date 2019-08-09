import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Filter: _Structure_ = {
  type: "structure",
  required: ["Type", "Field", "Value"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Field: {
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
