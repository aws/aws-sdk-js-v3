import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    absolutePath: {
      shape: {
        type: "string"
      }
    },
    blobId: {
      shape: {
        type: "string"
      }
    },
    fileMode: {
      shape: {
        type: "string"
      }
    }
  }
};
