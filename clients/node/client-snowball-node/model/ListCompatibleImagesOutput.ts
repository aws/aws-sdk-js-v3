import { _CompatibleImageList } from "./_CompatibleImageList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListCompatibleImagesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CompatibleImages: {
      shape: _CompatibleImageList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
