import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidS3BucketException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidS3BucketException"
};
