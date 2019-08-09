import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CompletedPart: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ETag: {
      shape: {
        type: "string"
      }
    },
    PartNumber: {
      shape: {
        type: "integer"
      }
    }
  }
};
