import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRoleAliasInput: _Structure_ = {
  type: "structure",
  required: ["roleAlias", "roleArn"],
  members: {
    roleAlias: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "roleAlias"
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    credentialDurationSeconds: {
      shape: {
        type: "integer",
        min: 900
      }
    }
  }
};
