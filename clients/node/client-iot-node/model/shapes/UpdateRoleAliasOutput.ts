import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRoleAliasOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    roleAlias: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleAliasArn: {
      shape: {
        type: "string"
      }
    }
  }
};
