import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ManagedResourceSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    AssociationCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
