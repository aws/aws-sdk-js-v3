import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteMailboxPermissionsInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "EntityId", "GranteeId"],
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
    GranteeId: {
      shape: {
        type: "string",
        min: 12
      }
    }
  }
};
