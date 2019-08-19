import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Item: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    ETag: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastModified: {
      shape: {
        type: "timestamp"
      }
    },
    ContentType: {
      shape: {
        type: "string"
      }
    },
    ContentLength: {
      shape: {
        type: "integer"
      }
    }
  }
};
