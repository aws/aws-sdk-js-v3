import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAccountPasswordPolicyInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MinimumPasswordLength: {
      shape: {
        type: "integer",
        min: 6
      }
    },
    RequireSymbols: {
      shape: {
        type: "boolean"
      }
    },
    RequireNumbers: {
      shape: {
        type: "boolean"
      }
    },
    RequireUppercaseCharacters: {
      shape: {
        type: "boolean"
      }
    },
    RequireLowercaseCharacters: {
      shape: {
        type: "boolean"
      }
    },
    AllowUsersToChangePassword: {
      shape: {
        type: "boolean"
      }
    },
    MaxPasswordAge: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    PasswordReusePrevention: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    HardExpiry: {
      shape: {
        type: "boolean"
      }
    }
  }
};
