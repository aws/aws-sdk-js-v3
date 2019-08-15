import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateDelegateToResourceInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "ResourceId", "EntityId"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    EntityId: {
      shape: {
        type: "string",
        min: 12
      }
    }
  }
};
