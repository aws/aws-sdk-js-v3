import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserBucketDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Bucket: {
      shape: {
        type: "string"
      },
      locationName: "s3Bucket"
    },
    S3Key: {
      shape: {
        type: "string"
      },
      locationName: "s3Key"
    }
  }
};
