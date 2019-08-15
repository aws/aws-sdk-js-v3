import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3ReferenceDataSource: _Structure_ = {
  type: "structure",
  required: [],
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
    }
  }
};
