import { _PermissionValues } from "./_PermissionValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutMailboxPermissionsInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationId", "EntityId", "GranteeId", "PermissionValues"],
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
    },
    PermissionValues: {
      shape: _PermissionValues
    }
  }
};
