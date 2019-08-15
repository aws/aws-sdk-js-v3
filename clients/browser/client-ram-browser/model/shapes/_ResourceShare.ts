import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceShare: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceShareArn: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    owningAccountId: {
      shape: {
        type: "string"
      }
    },
    allowExternalPrincipals: {
      shape: {
        type: "boolean"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    statusMessage: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
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
    }
  }
};
