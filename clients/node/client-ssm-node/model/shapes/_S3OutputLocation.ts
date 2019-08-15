import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3OutputLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OutputS3Region: {
      shape: {
        type: "string",
        min: 3
      }
    },
    OutputS3BucketName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    OutputS3KeyPrefix: {
      shape: {
        type: "string"
      }
    }
  }
};
