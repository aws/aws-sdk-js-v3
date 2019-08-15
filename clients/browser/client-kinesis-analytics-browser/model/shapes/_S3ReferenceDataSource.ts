import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3ReferenceDataSource: _Structure_ = {
  type: "structure",
  required: ["BucketARN", "FileKey", "ReferenceRoleARN"],
  members: {
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
    },
    ReferenceRoleARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
