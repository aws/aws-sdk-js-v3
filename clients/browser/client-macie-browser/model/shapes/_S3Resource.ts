import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3Resource: _Structure_ = {
  type: "structure",
  required: ["bucketName"],
  members: {
    bucketName: {
      shape: {
        type: "string"
      }
    },
    prefix: {
      shape: {
        type: "string"
      }
    }
  }
};
