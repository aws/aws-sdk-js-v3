import { _S3ArtifactLocation } from "./_S3ArtifactLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ArtifactLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    s3Location: {
      shape: _S3ArtifactLocation
    }
  }
};
