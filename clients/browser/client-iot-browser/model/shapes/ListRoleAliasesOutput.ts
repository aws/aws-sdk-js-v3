import { _RoleAliases } from "./_RoleAliases";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRoleAliasesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    roleAliases: {
      shape: _RoleAliases
    },
    nextMarker: {
      shape: {
        type: "string"
      }
    }
  }
};
