import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlobMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    blobId: {
      shape: {
        type: "string"
      }
    },
    path: {
      shape: {
        type: "string"
      }
    },
    mode: {
      shape: {
        type: "string"
      }
    }
  }
};
