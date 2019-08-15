import { _ArtifactLocation } from "./_ArtifactLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Artifact: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    revision: {
      shape: {
        type: "string",
        min: 1
      }
    },
    location: {
      shape: _ArtifactLocation
    }
  }
};
