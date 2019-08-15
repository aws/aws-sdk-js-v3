import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3ReferenceDataSourceDescription: _Structure_ = {
  type: "structure",
  required: ["BucketARN", "FileKey"],
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
