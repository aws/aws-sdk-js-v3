import { _ImageVersions } from "./_ImageVersions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentImage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    versions: {
      shape: _ImageVersions
    }
  }
};
