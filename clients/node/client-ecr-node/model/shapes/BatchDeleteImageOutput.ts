import { _ImageIdentifierList } from "./_ImageIdentifierList";
import { _ImageFailureList } from "./_ImageFailureList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDeleteImageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    imageIds: {
      shape: _ImageIdentifierList
    },
    failures: {
      shape: _ImageFailureList
    }
  }
};
