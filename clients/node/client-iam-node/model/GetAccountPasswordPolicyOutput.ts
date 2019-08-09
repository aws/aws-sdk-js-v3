import { _PasswordPolicy } from "./_PasswordPolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAccountPasswordPolicyOutput: _Structure_ = {
  type: "structure",
  required: ["PasswordPolicy"],
  members: {
    PasswordPolicy: {
      shape: _PasswordPolicy
    }
  }
};
