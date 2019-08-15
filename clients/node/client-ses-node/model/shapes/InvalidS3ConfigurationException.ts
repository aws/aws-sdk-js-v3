import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidS3ConfigurationException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bucket: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidS3ConfigurationException",
  exceptionCode: "InvalidS3Configuration"
};
