import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Principal: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string"
      }
    },
    resourceShareArn: {
      shape: {
        type: "string"
      }
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    external: {
      shape: {
        type: "boolean"
      }
    }
  }
};
