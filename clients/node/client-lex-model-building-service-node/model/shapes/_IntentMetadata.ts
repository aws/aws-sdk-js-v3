import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IntentMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    lastUpdatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    version: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
