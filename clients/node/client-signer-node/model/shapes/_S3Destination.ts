import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Destination: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bucketName: {
      shape: {
        type: "string"
      }
    },
    prefix: {
      shape: {
        type: "string"
      }
    }
  }
};
