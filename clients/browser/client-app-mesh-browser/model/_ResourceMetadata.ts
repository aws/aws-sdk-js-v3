import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceMetadata: _Structure_ = {
  type: "structure",
  required: ["arn", "createdAt", "lastUpdatedAt", "uid", "version"],
  members: {
    arn: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    uid: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "integer"
      }
    }
  }
};
