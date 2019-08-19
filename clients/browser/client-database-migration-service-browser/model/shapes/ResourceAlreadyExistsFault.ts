import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceAlreadyExistsFault: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
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
  exceptionType: "ResourceAlreadyExistsFault"
};
