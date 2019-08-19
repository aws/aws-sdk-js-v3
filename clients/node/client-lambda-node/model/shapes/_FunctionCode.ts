import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FunctionCode: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ZipFile: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    S3Bucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    S3Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3ObjectVersion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
