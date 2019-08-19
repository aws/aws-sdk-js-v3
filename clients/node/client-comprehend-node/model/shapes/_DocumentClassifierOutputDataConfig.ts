import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentClassifierOutputDataConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Uri: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
