import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImageIdentifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    imageDigest: {
      shape: {
        type: "string"
      }
    },
    imageTag: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
