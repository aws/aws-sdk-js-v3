import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Location: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Bucket: {
      shape: {
        type: "string"
      }
    },
    S3Key: {
      shape: {
        type: "string"
      }
    }
  }
};
