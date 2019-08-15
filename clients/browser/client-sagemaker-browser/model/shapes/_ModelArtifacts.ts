import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ModelArtifacts: _Structure_ = {
  type: "structure",
  required: ["S3ModelArtifacts"],
  members: {
    S3ModelArtifacts: {
      shape: {
        type: "string"
      }
    }
  }
};
