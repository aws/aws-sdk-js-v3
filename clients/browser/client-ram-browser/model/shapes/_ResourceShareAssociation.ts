import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceShareAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceShareArn: {
      shape: {
        type: "string"
      }
    },
    associatedEntity: {
      shape: {
        type: "string"
      }
    },
    associationType: {
      shape: {
        type: "string"
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
