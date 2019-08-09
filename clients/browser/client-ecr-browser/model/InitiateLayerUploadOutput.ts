import { Structure as _Structure_ } from "@aws-sdk/types";

export const InitiateLayerUploadOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    uploadId: {
      shape: {
        type: "string"
      }
    },
    partSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
