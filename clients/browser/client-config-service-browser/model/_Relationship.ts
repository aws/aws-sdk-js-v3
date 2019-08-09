import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Relationship: _Structure_ = {
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
    relationshipName: {
      shape: {
        type: "string"
      }
    }
  }
};
