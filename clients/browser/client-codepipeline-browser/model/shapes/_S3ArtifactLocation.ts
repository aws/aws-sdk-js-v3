import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3ArtifactLocation: _Structure_ = {
  type: "structure",
  required: ["bucketName", "objectKey"],
  members: {
    bucketName: {
      shape: {
        type: "string"
      }
    },
    objectKey: {
      shape: {
        type: "string"
      }
    }
  }
};
