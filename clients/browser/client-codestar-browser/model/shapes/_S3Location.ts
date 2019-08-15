import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Location: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bucketName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    bucketKey: {
      shape: {
        type: "string"
      }
    }
  }
};
