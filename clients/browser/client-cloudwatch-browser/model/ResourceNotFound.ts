import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceNotFound: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "ResourceNotFound",
  exceptionCode: "ResourceNotFound"
};
