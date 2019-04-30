import { _RolesMap } from "./_RolesMap";
import { _RoleMappingMap } from "./_RoleMappingMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetIdentityPoolRolesInput: _Structure_ = {
  type: "structure",
  required: ["IdentityPoolId", "Roles"],
  members: {
    IdentityPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Roles: {
      shape: _RolesMap
    },
    RoleMappings: {
      shape: _RoleMappingMap
    }
  }
};
