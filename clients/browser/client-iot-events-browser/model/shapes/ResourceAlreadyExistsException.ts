import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceAlreadyExistsException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    resourceId: {
      shape: {
        type: "string"
      }
    },
    resourceArn: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ResourceAlreadyExistsException"
};
