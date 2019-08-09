import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceNotFoundException: _Structure_ = {
  type: "structure",
  required: ["code", "message"],
  members: {
    code: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ResourceNotFoundException"
};
