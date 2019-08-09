import { _ImageIdentifierList } from "./_ImageIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteImageInput: _Structure_ = {
  type: "structure",
  required: ["repositoryName", "imageIds"],
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
    imageIds: {
      shape: _ImageIdentifierList
    }
  }
};
