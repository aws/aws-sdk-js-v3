import { _ImageIdentifierList } from "./_ImageIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListImagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    imageIds: {
      shape: _ImageIdentifierList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
