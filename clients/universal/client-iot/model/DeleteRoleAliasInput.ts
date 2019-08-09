import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRoleAliasInput: _Structure_ = {
  type: "structure",
  required: ["roleAlias"],
  members: {
    roleAlias: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "roleAlias"
    }
  }
};
