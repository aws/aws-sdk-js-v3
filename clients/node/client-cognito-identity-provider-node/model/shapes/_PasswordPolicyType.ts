import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PasswordPolicyType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MinimumLength: {
      shape: {
        type: "integer",
        min: 6
      }
    },
    RequireUppercase: {
      shape: {
        type: "boolean"
      }
    },
    RequireLowercase: {
      shape: {
        type: "boolean"
      }
    },
    RequireNumbers: {
      shape: {
        type: "boolean"
      }
    },
    RequireSymbols: {
      shape: {
        type: "boolean"
      }
    },
    TemporaryPasswordValidityDays: {
      shape: {
        type: "integer"
      }
    }
  }
};
