import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PhoneNumber: _Structure_ = {
  type: "structure",
  required: ["Number", "Type"],
  members: {
    Number: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    Type: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
