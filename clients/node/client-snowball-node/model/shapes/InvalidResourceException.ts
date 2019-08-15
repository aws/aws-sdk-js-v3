import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidResourceException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceType: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "InvalidResourceException"
};
