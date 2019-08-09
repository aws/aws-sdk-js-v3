import { _ImageTagList } from "./_ImageTagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImageDetail: _Structure_ = {
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
    imageDigest: {
      shape: {
        type: "string"
      }
    },
    imageTags: {
      shape: _ImageTagList
    },
    imageSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    imagePushedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
