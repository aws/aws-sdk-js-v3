import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Source: _Structure_ = {
  type: "structure",
  required: ["bucketName", "key", "version"],
  members: {
    bucketName: {
      shape: {
        type: "string"
      }
    },
    key: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    }
  }
};
