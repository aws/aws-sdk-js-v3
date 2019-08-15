import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RoleAliasDescription: _Structure_ = {
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
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    owner: {
      shape: {
        type: "string",
        min: 12
      }
    },
    credentialDurationSeconds: {
      shape: {
        type: "integer",
        min: 900
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
