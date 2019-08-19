import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoggingInfo: _Structure_ = {
  type: "structure",
  required: ["S3BucketName", "S3Region"],
  members: {
    S3BucketName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    S3KeyPrefix: {
      shape: {
        type: "string"
      }
    },
    S3Region: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
