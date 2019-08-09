import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceIdentifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceType: {
      shape: {
        type: "string"
      }
    },
    resourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    resourceName: {
      shape: {
        type: "string"
      }
    },
    resourceDeletionTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
