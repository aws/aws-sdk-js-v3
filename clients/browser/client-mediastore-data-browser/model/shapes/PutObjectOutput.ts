import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutObjectOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContentSHA256: {
      shape: {
        type: "string",
        min: 64
      }
    },
    ETag: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StorageClass: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
