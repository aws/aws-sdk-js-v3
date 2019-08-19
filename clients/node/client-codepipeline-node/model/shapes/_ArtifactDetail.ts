import { _S3Location } from "./_S3Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ArtifactDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    s3location: {
      shape: _S3Location
    }
  }
};
