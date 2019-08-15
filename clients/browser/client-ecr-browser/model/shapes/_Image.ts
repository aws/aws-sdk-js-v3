import { _ImageIdentifier } from "./_ImageIdentifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Image: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    registryId: {
      shape: {
        type: "string"
      }
    },
    repositoryName: {
      shape: {
        type: "string",
        min: 2
      }
    },
    imageId: {
      shape: _ImageIdentifier
    },
    imageManifest: {
      shape: {
        type: "string"
      }
    }
  }
};
