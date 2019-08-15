import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAliasInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "EntityId", "Alias"],
  members: {
    OrganizationId: {
      shape: {
        type: "string"
      }
    },
    EntityId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    Alias: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
