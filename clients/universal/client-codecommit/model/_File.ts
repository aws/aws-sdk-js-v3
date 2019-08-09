import { Structure as _Structure_ } from "@aws-sdk/types";

export const _File: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    blobId: {
      shape: {
        type: "string"
      }
    },
    absolutePath: {
      shape: {
        type: "string"
      }
    },
    relativePath: {
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
