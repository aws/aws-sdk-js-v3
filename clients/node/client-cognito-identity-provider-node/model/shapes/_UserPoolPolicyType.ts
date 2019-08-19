import { _PasswordPolicyType } from "./_PasswordPolicyType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserPoolPolicyType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PasswordPolicy: {
      shape: _PasswordPolicyType
    }
  }
};
