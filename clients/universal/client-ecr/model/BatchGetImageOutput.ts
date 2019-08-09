import { _ImageList } from "./_ImageList";
import { _ImageFailureList } from "./_ImageFailureList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchGetImageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    images: {
      shape: _ImageList
    },
    failures: {
      shape: _ImageFailureList
    }
  }
};
