import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Part: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PartNumber: {
      shape: {
        type: "integer"
      }
    },
    LastModified: {
      shape: {
        type: "timestamp"
      }
    },
    ETag: {
      shape: {
        type: "string"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    }
  }
};
