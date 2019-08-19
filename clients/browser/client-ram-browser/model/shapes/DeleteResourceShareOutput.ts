import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResourceShareOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    returnValue: {
      shape: {
        type: "boolean"
      }
    },
    clientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
