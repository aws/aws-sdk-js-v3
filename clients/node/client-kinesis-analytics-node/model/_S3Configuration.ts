import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Configuration: _Structure_ = {
  type: "structure",
  required: ["RoleARN", "BucketARN", "FileKey"],
  members: {
    RoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    BucketARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FileKey: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
