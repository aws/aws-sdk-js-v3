import { Structure as _Structure_ } from "@aws-sdk/types";

export const ActiveDirectoryError: _Structure_ = {
  type: "structure",
  required: ["ActiveDirectoryId"],
  members: {
    ActiveDirectoryId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "ActiveDirectoryError"
};
