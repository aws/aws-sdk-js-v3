import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Storage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AWSAccessKeyId: {
      shape: {
        type: "string"
      }
    },
    Bucket: {
      shape: {
        type: "string"
      },
      locationName: "bucket"
    },
    Prefix: {
      shape: {
        type: "string"
      },
      locationName: "prefix"
    },
    UploadPolicy: {
      shape: {
        type: "blob"
      },
      locationName: "uploadPolicy"
    },
    UploadPolicySignature: {
      shape: {
        type: "string"
      },
      locationName: "uploadPolicySignature"
    }
  }
};
