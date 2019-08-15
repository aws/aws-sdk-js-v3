import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3SignedObject: _Structure_ = {
  type: "structure",
  required: [],
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
    }
  }
};
